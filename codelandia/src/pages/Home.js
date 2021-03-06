import React, { useEffect, useState } from 'react'
import { Header } from '../styles/styled'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { CardWhite } from '../styles/styled'
import { Animated, FadeAnimations } from 'animated-styled-components'
import { Input, Pagination } from '../styles/styled'
import ReactPaginate from 'react-paginate'
import Loading from '../components/Loading'



const Home = () => {

    const [data, setData] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    const [searchTerm, setSearchTerm] = useState("")

    const dataPerPage = 7
    const pagesVisited = pageNumber * dataPerPage

    const displayData = data.slice(pagesVisited, pagesVisited + dataPerPage).filter((val => {
        if (searchTerm === "") {
            return val
        } else if (val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            return val
        }
    }))
        .map(data => {
            return (
                <Animated
                    animation={{
                        in: FadeAnimations.FadeInTop,
                        duration_in: 1
                    }}
                >
                    {data ?
                        <CardWhite>
                            <div className="accent">
                                <p className="description">{data.created_at}</p>
                                <p>{data.title}</p>
                                <p className="description">{data.description}</p>
                            </div>

                        </CardWhite>
                        : <Loading />
                    }
                </Animated>
            )
        })

    const requistion = () => {
        axios.get(BASE_URL)
            .then((response) => {
                console.log(response.data)
                setData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        requistion()
    }, [])

    const pageCount = Math.ceil(data.length / dataPerPage)

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    return (
        <div>
            <Header>
                <button>Codelandia</button>
                <button>blog</button>
            </Header>

            <Input>
                <input placeholder="Pesquisar no blog"
                    type="text"
                    onChange={(event) => {
                        setSearchTerm(event.target.value)
                    }}

                />
            </Input>

            {displayData}

            <Pagination>
                <ReactPaginate
                    previousLabel={"Anterior"}
                    nextLabel={"Pr??ximo"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />

            </Pagination>
        </div>
    )
}
export default Home
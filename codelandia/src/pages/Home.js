import React, { useEffect, useState } from 'react'
import { Header } from '../styles/styled'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { CardWhite } from '../styles/styled'
import { Animated, FadeAnimations } from 'animated-styled-components'
import { Input, Pagination } from '../styles/styled'
import ReactPaginate from 'react-paginate'

const Home = () => {

    const [data, setData] = useState([])
    const [pageNumber, setPageNumber] = useState(0)

    const dataPerPage = 6
    const pagesVisited = pageNumber * dataPerPage

    const displayData = data.slice(pagesVisited, pagesVisited + dataPerPage).map(data => {
        return (
            <Animated
                animation={{
                    in: FadeAnimations.FadeInTop,
                    duration_in: 1
                }}
            >
                <CardWhite>
                    <div>
                        <p className="description">{data.created_at}</p>
                        <p>{data.title}</p>
                        <p className="description">{data.description}</p>
                    </div>

                </CardWhite>
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
                {/* <button>Codelândia</button>
                <button>Blog</button> */}

                <Input>
                    <input placeholder="Pesquisar no blog" />
                </Input>



            </Header>

            {displayData}

            <Pagination>
                <ReactPaginate
                    previousLabel={"Anterior"}
                    nextLabel={"Próximo"}
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
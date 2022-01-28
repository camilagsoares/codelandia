import React, { useEffect, useState } from 'react'
import { Header } from '../styles/styled'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { CardWhite } from '../styles/styled'
import { Animated, FadeAnimations } from 'animated-styled-components'


const Home = () => {

    const [data, setData] = useState({})


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
    },[])
    
    // const renderOnScreen = data && data.map((i) => {
    //     return(
    //         <Animated
    //         animation={{
    //           in: FadeAnimations.FadeInTop,
    //           duration_in: 1
    //         }}
    //       >
    //         <CardWhite>
    //             <div>
    //             <p>{i.title}</p>
    //             <p className="description">{i.description}</p>
    //             </div>
        
    //         </CardWhite>
    //         </Animated>
    //     )
    // })

    return(
        <div>
            <Header>
                {/* <button>Codelândia</button>
                <button>Blog</button> */}

                {/* <input />  */}
            </Header>

           {/* {renderOnScreen} */}


        </div>
    )
}

export default Home
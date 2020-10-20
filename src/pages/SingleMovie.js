import React from 'react'

// importing components
import Nav from '../components/Nav'
import Crumb from '../components/Crumb'
import MovieDetail from '../components/MovieDetail'
import Footer from '../components/Footer'

const SingleMovie = () => {
    return (
        <div>
            <Nav/>
            <MovieDetail/>
            <Footer/>
        </div>
    )
}



export default SingleMovie

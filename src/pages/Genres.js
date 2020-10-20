import React from 'react'

// importing components
import Nav from '../components/Nav'
import Crumb from '../components/Crumb'
import Genre from '../components/Genre'
import Expected from '../components/Expected'
import Info from '../components/Info'
import Footer from '../components/Footer'

const Genres = () => {
    return (
        <div>
            <Nav/>
            <Crumb paths={['Home','Genres']}/>
            <Genre/>
            <Expected/>
            <Info/>
            <Footer/>
        </div>
    )
}

export default Genres

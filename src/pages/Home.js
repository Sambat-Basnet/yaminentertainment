import React from 'react'

// importing components
import Nav from '../components/Nav'
import NewItems from '../components/Newitems'
import SecNewItems from '../components/SecNewItems'
import Info from '../components/Info'
import Footer from '../components/Footer'
import Expected from '../components/Expected'


const Home = () => {
    return (
        <div>
            <Nav/>
            <NewItems/>
            <SecNewItems/>
            <Expected/>
            <Info/>
            <Footer />
        </div>
    )
}

export default Home

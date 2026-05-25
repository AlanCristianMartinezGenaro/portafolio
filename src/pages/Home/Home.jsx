import React from 'react'
import './Home.css'
import Header from '../../components/layout/Header/Header'
import Main from '../../components/layout/Main/Main'
import Footer from '../../components/layout/Footer/Footer'

function Home() {
    return (
        <div className='Home'>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default Home

import React from 'react'
import './Main.css'
import Welcome from './sections/Welcome/Welcome'
import Education from './sections/Education/Education'
import Experience from './sections/Experience/Experience'
import Skills from './sections/Skills/Skills'
import Badges from './sections/Badges/Badges'
import Contact from './sections/Contact/Contact'

function Main() {
    return (
        <main>
            <Welcome/>
            <Education/>
            <Experience/>
            <Skills/>
            <Badges/>
            <Contact/>
        </main>
    )
}

export default Main

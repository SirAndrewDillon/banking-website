import React, {useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'

const Routes = () => {
const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
    setIsOpen(!isOpen)
}


    return (
        <Router>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
        </Router>
    )
}

export default Routes

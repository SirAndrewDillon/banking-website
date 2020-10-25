import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'

const Routes = () => {
    return (
        <Router>
            <Sidebar />
            <Navbar />
        </Router>
    )
}

export default Routes

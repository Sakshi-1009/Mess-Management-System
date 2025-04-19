import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return(
        <nav style={{padding: '1rem', background: '#eee'}}>
            <Link to='/' style={{marginRight: '1rem'}}>Dashboard</Link>
            <Link to='/attendence' style={{marginRight: '1rem'}}>Attendence</Link>
            <Link to='/feedback'>Feedback</Link>
        </nav>
    )
}
import React from 'react'
import { Link } from 'react-router-dom'
import {GiKnifeFork} from "react-icons/gi"          

function Header() {
  return (
    <header>
        <Link to = {"/"}>
            <div className='link-header'>
                <GiKnifeFork/>
                <h1 className='head-title'>Scrumptious</h1>
            </div>
        </Link>    
    </header>
  )
}

export default Header
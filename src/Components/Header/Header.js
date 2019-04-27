import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        
        <h3>Callahan AutoParts</h3>
        
        <div className='header_link_box'>
        <Link to='/dashboard'>Dasboard</Link>
        <Link to='/wiz/1'>Add</Link>
        <Link to='/search'>Search</Link>
        <Link to='/'>Logout</Link>
        <Link to='/me'>Home</Link>
      </div>
      </div>
    )
  }
}

export default Header;
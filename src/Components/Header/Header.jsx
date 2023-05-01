import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import './header.css';
const Header = () => {
  return (
    <Fragment>
        <div className="header" >
            <Link to={'/login'} style={{textDecoration:'none',color:'white',margin:'2vmax 2vmax',padding:'2vmax'}}>Login</Link>
            <Link to={'/signup'} style={{textDecoration:'none',color:'white'}}>Signup</Link>
        </div>
    </Fragment>
  )
}

export default Header;

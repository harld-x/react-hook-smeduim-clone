import React from 'react'
import {NavLink, Link} from "react-router-dom";

const TopBar = () => {
    return (
        <nav className='navbar navbar-light'>
            <div className="container">
                <Link to='/' className='navbar-brand'>Medium</Link>
            </div>
            <ul className='nav navbar-nav pull-xs-right'>
                <li className='nav-item'>
                    <NavLink  className='nav-link' to='/' exact>
                        Home
                    </NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink  className='nav-link' to='/login'>
                        Sign In
                    </NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink  className='nav-link' to='/register'>
                        Sign Up
                    </NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default  TopBar
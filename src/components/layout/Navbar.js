import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = (props) => {
    return (
        <div className="navbar bg-primary">
            <h1>
                <i className={props.icon}/> {props.title}</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
        </div>
    )
}

Navbar.defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github"
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar

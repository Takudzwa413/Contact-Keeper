import React from 'react';
import Proptypes from 'prop-types';

export const Navbar = ({title,icon}) => {
    return (
        <div className="navbar bg-primary">
            <h1>
                <i className={icon}/> {title}
            </h1>
        </div>
    )
}
Navbar.propTypes = {
    title:Proptypes.string.isRequired,
    icon:Proptypes.string
}

Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon:'fas fa-id-card-alt'
}

export default Navbar;

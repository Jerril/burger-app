import React from 'react';

import classes from './Logo.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = props =>{
    return(
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="myBurger_Logo" />
        </div>
    );
}

export default logo;
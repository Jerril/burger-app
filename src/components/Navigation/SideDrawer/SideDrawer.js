import React from 'react';

import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Aux from '../../../containers/hoc/Auxilliary/Auxilliary';

const sideDrawer = props => {
    return (
        <Aux>
             <Backdrop show={props.show} closeModal={props.hide} loc="SideDrawer"/>
            <div className={[classes.SideDrawer, props.show?classes.Open:classes.Close].join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems className={classes.NavItems} />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;
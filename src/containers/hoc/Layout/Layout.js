import React, {Component} from 'react';

import classes from './Layout.css';
import Aux from '../Auxilliary/Auxilliary';
import Toolbar from '../../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state={
        sideDrawerOpen: false
    }

    toggleDrawerHandler = () => this.setState((prevState, props) => {
        return {
            sideDrawerOpen: !prevState.sideDrawerOpen
        }
    });

    render(){
        return(
            <Aux>
                <Toolbar clicked={this.toggleDrawerHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen} hide={this.toggleDrawerHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;
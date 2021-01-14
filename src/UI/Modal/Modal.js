import React, { Component } from 'react'

import classes from './Modal.css';
import Aux from '../../containers/hoc/Auxilliary/Auxilliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children; 
    };

    render(){
        return(<Aux>
            <Backdrop show={this.props.show} closeModal={this.props.closeModal}/>
            <div style={{transform: this.props.show?'translateY(0)':'translateY(-100%)', opacity: this.props.show?'1':'0'}} className={classes.Modal}>{this.props.children}</div>
        </Aux>);
    }
}

export default Modal;
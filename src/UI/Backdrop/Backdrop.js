import React from 'react';

import classes from './Backdrop.css';

const backdrop = props => {
    return(props.show?<div className={[classes.Backdrop, classes[props.loc]].join(' ')} onClick={props.closeModal}></div>:null);
}

export default backdrop;
import React from 'react';

import classes from './BuildControl.css';

const buildControl = props => (
    <div className={classes.BuildControl}>
        <p className={classes.Label}>{props.ingredient}</p>
        <button className={classes.Less} onClick={props.removeIngredient} disabled={props.disabled}>Less</button>
        <button className={classes.More} onClick={props.addIngredient}>More</button>
    </div>
);

export default buildControl;
import React from 'react';

import classes from './Order.css';

const order = props => {
    let ingredients = [];
    for(let ing in props.ingredients){
        ingredients.push(<span>{ing} ({props.ingredients[ing]})</span>)
    }

    return(
        <div className={classes.Order}>
            <p>Ingredients: {ingredients}</p>
    <p>Price: <strong>${Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
}

export default order;
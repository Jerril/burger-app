import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls = props => {
    const ingredients = Object.keys(props.ingredients);

    let controls = ingredients.map((type, i) => (<BuildControl
                                                    key={type + i}
                                                    ingredient={type}
                                                    addIngredient={() => props.addIngredient(type)}
                                                    removeIngredient={() => props.removeIngredient(type)}
                                                    disabled={props.disabled(type)}
                                                />));

    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
            {controls}
            <button
                className={classes.OrderButton}
                onClick={props.ordered}
                disabled={!props.purchasable()}>ORDER NOW</button>
        </div>
    );
}

export default buildControls;
import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...new Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey+i} type={igKey} />;
        });
    }).reduce((arr, curr) => arr.concat(curr), []);

    if(transformedIngredients.length < 1){
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }

    return <div className={classes.Burger}>
        <BurgerIngredient type="bread-top" />
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />
    </div>
}

export default burger;
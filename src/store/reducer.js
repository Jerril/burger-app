import * as actionTypes from './actions';

const BURGER_PRICES = {
    salad: 0.4,
    meat: 1.3,
    cheese: 0.3,
    bacon: 0.8
}

const initialState = {
    ingredients: {
        bacon: 0,
        cheese: 0,
        meat: 0,
        salad: 0
    },
    totalPrice: 4,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_INGREDIENT: 
            const addIngs = {...state.ingredients};
            addIngs[action.ingredient] += 1;
            return {
                ...state,
                ingredients: addIngs,
                totalPrice: state.totalPrice += BURGER_PRICES[action.ingredient]
            }
        case actionTypes.REMOVE_INGREDIENT: 
            const removeIngs = {...state.ingredients};
            removeIngs[action.ingredient] -= 1;
            return {
                ...state,
                ingredients: removeIngs,
                totalPrice: state.totalPrice += BURGER_PRICES[action.ingredient]
            }
        default: return state
    }
}

export default reducer;
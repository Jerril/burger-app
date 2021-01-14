import React, { Component } from 'react';
import axios from '../../axios.orders';
import { connect } from 'react-redux';

import Aux from '../hoc/Auxilliary/Auxilliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Spinner from '../../UI/Spinner/Spinner';
import withErrorHandler from '../../containers/hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component{
    state = {
        purchasing: false,
        loading: false,
        error: false
    }
    
    disableBtnHandler = type => this.props.ings[type] <= 0;

    updatePurchasableState = () => {
        let ingredients = { ...this.props.ings };

        const sum = Object.keys( ingredients )
            .map( igKey => ingredients[igKey])
            .reduce((sum, el) => sum + el, 0);
        
        console.log(sum > 0);
        return sum > 0;
    }

    updatePurchasingStateHandler = () => this.setState({ purchasing: true });

    purchaseCancelledHandler = () => this.setState({ purchasing: false });

    purchaseContinuedHandler = () => {
        this.props.history.push('/checkout');
    };

    render(){
        let burger = <center>{this.state.error?<p style={{marginLeft:'1rem', fontWeight:'bold'}}>Oops! Ingredients can't be loaded</p>:<Spinner />}</center>;
        let orderSummary = null;

        if(this.props.ings){
            burger = (<Aux>
                <Burger ingredients={this.props.ings} />
                <BuildControls 
                    ingredients={this.props.ings}
                    price={this.props.price}
                    addIngredient={this.props.onIngredientAdded}
                    removeIngredient={this.props.onIngredientRemoved}
                    disabled={this.disableBtnHandler}
                    purchasable={this.updatePurchasableState}
                    ordered={this.updatePurchasingStateHandler}
                />
            </Aux>);

            orderSummary = (<OrderSummary
                                closeModal={this.purchaseCancelledHandler}
                                continuePurchase={this.purchaseContinuedHandler}
                                ingredients={this.props.ings} price={this.props.price}
                            />);
        }

        if(this.state.loading){
            orderSummary = <Spinner />;
        }

        return <Aux>
            <Modal show={this.state.purchasing} closeModal={this.purchaseCancelledHandler}>
                {orderSummary}
            </Modal>
            {burger}
        </Aux>
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ing) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredient: ing}),
        onIngredientRemoved: (ing) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredient: ing})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
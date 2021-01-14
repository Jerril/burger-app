import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Orders/CheckoutSummary/CheckoutSummary';
import CheckoutForm from '../../components/Orders/CheckoutForm/CheckoutForm';

class Checkout extends Component{
    checkoutCancelledHandler = props => this.props.history.goBack();

    checkoutContinuedHandler = props => this.props.history.replace('/checkout/checkout-form');

    render(){
        return(
            <div>
                <CheckoutSummary 
                    ingredients={this.props.ings}
                    checkoutCancelledHandler={this.checkoutCancelledHandler}
                    checkoutContinuedHandler={this.checkoutContinuedHandler}
                />
                <Route path={this.props.match.path + '/checkout-form'} component={CheckoutForm} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients
    }
}

export default connect(mapStateToProps)(Checkout);
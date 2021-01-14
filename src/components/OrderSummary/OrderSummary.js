import React, {Component} from 'react'

import classes from './OrderSummary.css';
import Aux from '../../containers/hoc/Auxilliary/Auxilliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
    render(){
        let list = Object.keys(this.props.ingredients).filter(idKey => this.props.ingredients[idKey] >= 1).map(igKey => {
            return (<tr key={igKey}><td>{igKey}</td><td>{this.props.ingredients[igKey]}</td></tr>);
        });
        return(<Aux>
            <h3>Your Order</h3>
            <p>Get the delicious burger delivered to you</p>
            <table className={classes.Table}> 
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Qty</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Price</th>
                        <th>${this.props.price.toFixed(2)}</th>
                    </tr>
                </tfoot>
            </table>
            <p>Do you want to continue to checkout ?</p>
            <Button clicked={this.props.closeModal} btnType='Danger'>Cancel</Button>
            <Button clicked={this.props.continuePurchase} btnType='Success'>Continue</Button>
        </Aux>);
    }
}

export default OrderSummary;
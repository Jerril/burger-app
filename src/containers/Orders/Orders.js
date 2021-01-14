import React, { Component } from 'react';
import axios from '../../axios.orders';

import Order from '../../components/Orders/Order/Order';
import Spinner from '../../UI/Spinner/Spinner';
import withErrorHandler from '../../containers/hoc/withErrorHandler/withErrorHandler';

class Orders extends Component{
    state = {
        orders: null,
        error: null
    }

    componentDidMount(){
        axios.get('/orders.json').then(res => {
            let orders = [];
            for(let key in res.data){
                let order = {id:key, ...res.data[key]}
                orders.push(order)
            }
            this.setState({orders: orders})
        }).catch(err=>this.setState({error: err}));
    }

    render(){
        let orders = this.state.error?<p style={{marginLeft:'1rem', fontWeight:'bold'}}>Orders can't be loaded</p>:<Spinner />;

        if(this.state.orders){
            orders = this.state.orders.map(order => <Order key={order.id} ingredients={order.ingredients} price={order.price} />);
        }

        return orders;
    }
}

export default withErrorHandler(Orders, axios);
import React, { Component } from 'react';
import axios from '../../../axios.orders';

import classes from './CheckoutForm.css'
import Button from '../../../UI/Button/Button';
import Spinner from '../../../UI/Spinner/Spinner';
import Input from '../../../UI/Input/Input';
import withErrorHandler from '../../../containers/hoc/withErrorHandler/withErrorHandler';

class CheckoutForm extends Component{
    state = {
        orderForm:{
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-mail'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            postalCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Postal Code'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value:"fastest", displayValue:"Fastest"}, 
                        {value:"cheapest", displayValue:"Cheapest"}
                    ]
                },
                value: 'fastest',
                validation: {},
                valid: true
            },
        },
        formIsValid: false,
        loading: false
    }

    checkValidity(value, rules){
        let isValid = false;

        if(rules.required){
            isValid = value.trim('') !== '';
        }

        return isValid;
    }

    inputChangedHandler = (e, label) => {
        let updatedOrderForm = {...this.state.orderForm}
        let updatedFormElement = {...updatedOrderForm[label]};
        updatedFormElement.value = e.target.value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedOrderForm[label] = updatedFormElement;

        let formIsValid = true
        for (let key in updatedOrderForm){
            formIsValid = updatedOrderForm[key].valid && formIsValid;
        }

        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    }

    submitFormHandler = (e) => {
        e.preventDefault();

        this.setState({loading: true});

        let formData = {};
        for(let key in this.state.orderForm){
            formData[key] = this.state.orderForm[key].value;
        }

        let order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            ...formData
        };

        axios.post('/orders.json', order)
        .then(response => {
            this.setState({loading:false});
            this.props.history.replace('/');
        })
        .catch(error => this.setState({loading:false}));
    }

        render(){
            let formElements = [];
            for(let key in this.state.orderForm){
                let {elementType, elementConfig, value, valid, touched} = this.state.orderForm[key];
                formElements.push(<Input key={key} elementtype={elementType} elementConfig={elementConfig} value={value} invalid={!valid} touched={touched} changed={(e) => this.inputChangedHandler(e, key)}/>);        
            }

            let contactForm  = (<form action="" method="POST" onSubmit={this.submitFormHandler}>
                {formElements}
                <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
            </form>);

            if(this.state.loading){
                contactForm = <Spinner />
            }

            return(<div className={classes.CheckoutForm}>
                <h4>Enter Your Contact Data</h4>
                {contactForm}
            </div>);
        }
}

export default withErrorHandler(CheckoutForm, axios);
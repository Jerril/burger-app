import React from 'react';

import classes from './Input.css';

const input = props => {
    let formElement;

    let formElementClasses = [classes.FormElement];

    if(props.invalid && props.touched){
        formElementClasses.push(classes.Invalid)
    }

    switch(props.elementtype){
        case 'input': formElement = <input className={formElementClasses.join(' ')}  {...props.elementConfig} value={props.value} onChange={props.changed} valid/>;
            break;
        case 'textarea': formElement = <textarea className={classes.FormElement}  {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        case 'select': formElement = (<select className={classes.FormElement} value={props.value} onChange={props.changed}>
                {props.elementConfig.options.map(option => <option value={option.value}>{option.displayValue}</option>)}
            </select>);
            break;
        default: formElement = <input type="text" className={classes.FormElement}   {...props.elementConfig} value={props.value} onChange={props.changed} />;
    }

    return formElement
}

export default input;
import React, { useReducer, useEffect } from "react";

import './Input.css'

import { validate } from "../../util/validator";

const inputReducer = (state, action) =>{
    switch(action.type){
        case 'CHANGE':
            return{
                ...state,
                value: action.value,
                isValid: validate(action.value, action.validators)
            }
        case 'TOUCH':
            return{
                ...state,
                isTouch: true
            }
        default:
            return state
    }
}

const Input = props =>{
    const [inputState, dispatch] = useReducer(inputReducer, {value: '', isValid: false, isTouch: false})

    const {id, onInput} = props
    const {value, isValid} = inputState 

    useEffect(() =>{
        props.onInput(id, value, isValid)
    }, [id, value, isValid, onInput])



    const changeHandler = e =>{
        dispatch({
            type: 'CHANGE',
            value: e.target.value,
            validators: props.validators
        })
    }

    const touchHandler = () =>{
        dispatch({
            type:'TOUCH'
        })
    }

    const element = props.element === 'input' ? 
    <input 
        id={props.id} 
        type={props.type} 
        placeholder={props.placeholder} 
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value} />
    : 
    <textarea 
        id={props.id} 
        rows={props.rows || 3} 
        onChange={changeHandler} 
        onBlur={touchHandler}
        value={inputState.value}/>

    return (
        <div className={`form-control ${!inputState.isValid && inputState.isTouch ? 'form-control--invalid': ''}`}>
            <label htmlFor="{props.id}">{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouch ? <p>{props.errorText}</p> : <p></p>}
        </div>
    )
}

export default Input
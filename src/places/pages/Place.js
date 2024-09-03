import React, {useCallback, useReducer} from "react";

import './Place.css'

import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validator";
import Button from '../../shared/components/Button/Button'


const formReducer = (state, action) => {
    switch(action.type){
        case 'INPUT_CHANGE':
            let formIsValid = true
            for(const inputID in state.input){
                if(inputID === action.inputID){
                    formIsValid = formIsValid && action.isValid
                }else{
                    formIsValid = formIsValid && state.inputs[inputID].isValid
                }
            }
            return{
                ...state,
                input:{
                    ...state.inputs,
                    [action.inputID] : {value: action.value, isValid: action.isValid}
                },
                isValid: formIsValid
            }
        default:
            return state
    }

}

const Place = () => {

    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            title: {
                value: '',
                isValid: false
            }
        },
        description: {
            title: {
                value: '',
                isValid: false
            }
        },
        isValid: false
    })

    const titleInputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type:'INPUT_CHANGE',
            value: value,
            isValid: isValid,
            inputID: id
        })
    }, [])


    return (
        <form className="place-form">
            <Input 
                element='input' 
                type='text' 
                label='Title' 
                validators={[VALIDATOR_REQUIRE()]} 
                onInput={titleInputHandler} 
                errorText="Please Enter A Valid Title" 
            />

            <Input 
                element='description'
                type='textarea' 
                label='description' 
                validators={[VALIDATOR_MINLENGTH(5)]} 
                onInput={titleInputHandler} 
                errorText="Please Enter A Valid Description" 
            />

            <Button type='submit' disabled={!formState.isValid}>
                Add Place
            </Button>

        </form>    
    )
    
}

export default Place
        
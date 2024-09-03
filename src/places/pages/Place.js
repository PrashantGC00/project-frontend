import React, {useCallback} from "react";

import './Place.css'

import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validator";

const Place = () => {

    const titleInputHandler = useCallback((id, value, isValid) => {
        
    }, [])

    const descriptionInputHandler = useCallback((id, value, isValid) => {
        
    }, [])

    return (
        <form className="place-form">
            <Input 
                element='input' 
                type='text' 
                label='Title' 
                validators={[VALIDATOR_REQUIRE()]} 
                onInput={[titleInputHandler]} 
                errorText="Please Enter A Valid Title" 
            />

            <Input 
                element='description'
                type='textarea' 
                label='description' 
                validators={[VALIDATOR_MINLENGTH(5)]} 
                onInput={[descriptionInputHandler]} 
                errorText="Please Enter A Valid Description" 
            />
            
        </form>    
    )
    
}

export default Place
        
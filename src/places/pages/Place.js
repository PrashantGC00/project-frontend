import React from "react";

import './Place.css'

import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/util/validator";

const Place = () => {
    return (
        <form className="place-form">
            <Input element='input' type='text' label='Title' validators={[VALIDATOR_REQUIRE()]} onInput={[]} errorText="Please Enter A Valid Title" />
        </form>    
    )
    
}

export default Place
        
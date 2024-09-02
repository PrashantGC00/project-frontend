import React from "react";

import './Place.css'

import Input from "../../shared/components/FormElements/Input";

const Place = () => {
    return (
        <form className="place-form">
            <Input element='input' type='text' label='Title' validators={[]} onInput={[]} errorText="Please Enter A Valid Title" />
        </form>    
    )
    
}

export default Place
        
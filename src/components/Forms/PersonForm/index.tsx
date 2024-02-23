"use client";
import FormField from "@/components/FormField";
import { Person } from "@/types/types";
import { useState } from "react";

export default function PersonForm(props: any) {
    const [person, setPerson] = useState<Person>({
        id: 0, 
        firstName: '',
        isConfident: false,
    });
    
    return (
    <form onSubmit={props.submitForm}>
                <FormField object={person} setObject={setPerson} fieldName="firstName" fieldLabel="Name"/>
                <FormField object={person} setObject={setPerson} fieldName="surname" fieldLabel="Surname"/>
                <FormField object={person} setObject={setPerson} fieldName="nee" fieldLabel="Nee"/>
                <button onClick={props.submitForm}>Submit</button>
            </form> 
    )
}
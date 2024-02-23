"use client"

import Link from 'next/link';
import { useState } from 'react';
import { PersonUI } from '@/types/types';
import FormField from '@/components/FormField';
import { createPerson } from '@/app/data/people';

const Create: React.FC = () => {
  
  const [person, setPerson] = useState<PersonUI>({
    id: 0, 
    firstName: '',
    isConfident: false,
    surname: '',
    nee: '', 
  });

  const submitForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    debugger;
    const body = JSON.parse(JSON.stringify(person));
    var res = await createPerson(body)
    .then(res => {
      return res;
    })
    .catch(error => {
      console.log(error)
    });
    return res;
  }

    return (
      <div>
        <h1>Create a member</h1>
        <form onSubmit={submitForm}>
            <FormField object={person} setObject={setPerson} fieldName="firstName" fieldLabel="Name"/>
            <FormField object={person} setObject={setPerson} fieldName="surname" fieldLabel="Surname"/>
            <FormField object={person} setObject={setPerson} fieldName="nee" fieldLabel="Nee"/>
            <button onClick={submitForm}>Submit</button>
        </form>

        <Link href="/members">Back to members</Link>
      </div>
    );
  }

  export default Create;
  
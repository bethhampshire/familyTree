"use client"
import Link from 'next/link';
import { useState } from 'react';
import { Person } from '@/types/types';
import FormField from '@/components/FormField';
import { createPerson } from '@/app/data/people';

const Create: React.FC = () => {
  
  const [person, setPerson] = useState<Person>({
    id: 0, 
    firstName: '',
    isConfident: false,
  });

  const submitForm = async (e: React.SyntheticEvent) => {
    const body = person;
    await createPerson(body);
    console.log("submitted form");
    console.log(person);
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
  
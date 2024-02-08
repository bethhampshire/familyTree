'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FormEvent, ReactEventHandler, useState } from 'react';
import { Person } from '@/types/types';
import FormField from '@/components/FormField';

const Create: React.FC = () => {
    const [person, setPerson] = useState<Person>({
        id: 0, 
        firstName: '',
        isConfident: false, 
    });

    const submitForm = async (e: React.SyntheticEvent) => {
        debugger;
        const body = person;
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
        </form>

        <Link href="/members">Back to members</Link>
      </div>
    );
  }

  export default Create;
  
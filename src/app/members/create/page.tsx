'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FormEvent, ReactEventHandler, useState } from 'react';
import { Person } from '@/types/types';

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

    function handleFormFieldChange(e: any) {
        const field = e.target.id;
        setPerson({
            ...person,
            [field]: e.target.value,
            });
            console.log(person);
        }

    return (
      <div>
        <h1>Create a member</h1>
        <form onSubmit={submitForm}>
            <input id="firstName"
            onChange={handleFormFieldChange}
            value={person?.firstName}>
            </input>
            <label htmlFor="firstName">Name</label>
        </form>

        <Link href="/members">Back to members</Link>
      </div>
    );
  }

  export default Create;
  
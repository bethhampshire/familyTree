'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function MemberId() {
    const params = useParams();
    console.log(params.id);
    return (
      <div>
        <h1>Members page for {params.id}</h1>
        <form>
          
        </form>
        <Link href="/members">Back to members</Link>
      </div>
    );
  }
  
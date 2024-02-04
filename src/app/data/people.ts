import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import  prisma from "@/lib/prisma"

// A `main` function so that we can use async/await
export async function getPeople() {
  // Create a new user called `Alice`
  const people = await prisma.person.findMany({
  })

  return people;
}
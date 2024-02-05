import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import  prisma from "@/lib/prisma"

// A `main` function so that we can use async/await
export async function getUsers() {
  const users = await prisma.user.findMany({
  })

  return users;
}
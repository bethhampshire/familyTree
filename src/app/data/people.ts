import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import  prisma from "@/lib/prisma"
import { Person } from '@/types/types';

export async function getPeople() {
  const people = await prisma.person.findMany({
  })

  return people;
}

export async function createPerson(req: Person) {
  debugger;
  try {
    await prisma.person.create({
      data: {
        firstName: req.firstName,
        surname: req.surname,
      }
    });
  } catch (err) {
    console.log(err);
  }

  return;
}

export async function updatePerson(req:Person, res:any) {
  const personId = req.id;
  const person = await prisma.person.update({
    where: { id: personId },
    data: { 
      firstName: req.firstName,
      surname: req.surname,
      birthAt: req.birthAt,
      deathAt: req.deathAt
     },
  });
  res.json(person);
}
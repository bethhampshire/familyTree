"use server"
import  prisma from "@/lib/prisma"
import { PersonUI } from "@/types/types";
import { Person } from "@prisma/client";
import { NextResponse } from "next/server";

type UserCreationResponse =
  | { ok: true; data: Person }
  | { ok: false; error: string };

export async function getPeople() {
  const people = await prisma.person.findMany({
  })

  return people;
}

export async function createPerson(person: PersonUI): Promise<NextResponse<UserCreationResponse>> {
  try {
    const dbPerson = await prisma.person.create({
      data: {
        firstName: person.firstName,
        surname: person.surname,
        birthAt: person.birthAt,
        deathAt: person.deathAt,
        middlename: person.middlename,
        nee: person.nee,
        isConfident: false,

      }
    });

    if (!dbPerson) {
      return NextResponse.json({
        ok: false,
        error: "Error creating person"
      });
    }

    return NextResponse.json({
      ok: true,
      data: dbPerson
    })

  } catch (err) {
    throw err;
  }
}
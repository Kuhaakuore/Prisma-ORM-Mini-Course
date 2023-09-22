import { Student } from "@prisma/client";
import prisma from "./database";

async function findStudentsByClass() {
  const students = await prisma.student.groupBy({
    by: ["class"],
    _count: { id: true },
    orderBy: {
      _count: { id: "desc" },
    },
  });
  console.log(students);
}

async function findJoblessStudents() {
  const students = await prisma.student.groupBy({
    by: ["class"],
    where: {
      jobId: null,
    },
    _count: { id: true },
    orderBy: {
      _count: { id: "desc" },
    },
  });
  console.log(students);
}

findStudentsByClass();
findJoblessStudents();

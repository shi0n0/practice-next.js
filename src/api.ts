'use server';
import { revalidatePath } from 'next/cache';
import prisma from '../prisma/prisma';

export const addTodo = async(data: FormData) => {
    "use server"
     const text = data.get('text') as string;
     await prisma.tasks.create({ data: { text } });
     revalidatePath('/');
  };

export const deleteTodo = async (data: FormData) => {
    "use server"
    const id = data.get("id") as string;
    await prisma.tasks.delete({
      where: {
        id: Number(id),
      },
    });
    revalidatePath('/');
  }

export async function doneTodo(id:Number, is_completed: boolean) {
    await prisma.tasks.update({
        where: {
            id: Number(id),
        },
        data: {
            isCompleted: !is_completed,
        },
    });
    revalidatePath('/')
}
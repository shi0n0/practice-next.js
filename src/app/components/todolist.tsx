import React from "react"
import prisma from "../../../prisma/prisma";
import Todo from "./todo"

const TodoList = async() => {
    const tasks = await prisma.tasks.findMany();

    return(
        <ul>
            {tasks.map((task) => (
                    <Todo key={task.id} task={task} /> 
            ))}
        </ul>
    )
}

export default TodoList;
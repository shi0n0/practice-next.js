import React from "react"
import { Task } from "@/type";
import Todo from "./todo";

interface TaskProps {
    todos: Task[];
}

const Task = ({ todos }: TaskProps) => {
    return(
        <ul className="border-l-4 rounded-l p-2 border-blue-400 bg-gradient-to-r from-blue-200 shadow">
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} /> 
            ))}
        </ul>
    )
}

export default Task;
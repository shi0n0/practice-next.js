import { Task } from "./type"

export const getAllTodos = async (): Promise<Task[]> => {
    const res = await fetch(`http://localhost:3002/tasks`, {
        cache: "no-store",
    })
    const Todos = res.json()

    return Todos;
};

export const addTodo = async (todo: Task): Promise<Task[]> => {
    const res = await fetch(`http://localhost:3002/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
    })
    const NewTodo = res.json()

    return NewTodo;
};
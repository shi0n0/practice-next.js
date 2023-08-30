"use client"

import { addTodo } from "@/api";
import { ChangeEvent, FormEvent, use, useState } from "react";
import {v4 as uuidv4} from "uuid";

export default function Submit() {

    const [taskTitle, setTaskTitle] = useState("")

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault

        await addTodo({ id:uuidv4(), text: taskTitle})

    setTaskTitle("")
    }

    return(
        <form action="" className="flex flex-col" onSubmit={handleSubmit}>
            <input type="text" className="p-2 border rounded my-2 focus:outline-none" onChange={(e: ChangeEvent<HTMLInputElement>) => setTaskTitle(e.target.value)} value={taskTitle} />
            <button className="text-white bg-blue-500 p-2 transform my-2 hover:bg-blue-400 hover:scale-95 duration-100">
                タスク追加
            </button>
        </form>
    );
}

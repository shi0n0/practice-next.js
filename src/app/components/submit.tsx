"use client"

import { use, useState } from "react";


export default function Submit() {
    const [todos,setTodos] = useState<string[]>([]);
    const [task,setTask] = useState<string>("");

    const addTodos = () => {
        setTodos([...todos, task]);
        setTask("");
      };

    return(
        <form action="" className="flex flex-col">
            <input type="text" onChange={(e) => setTask(e.target.value)} className="p-2 border rounded my-2 focus:outline-none" />
            <button onClick={addTodos} className="text-white bg-blue-500 p-2 transform my-2 hover:bg-blue-400 hover:scale-95 duration-100">タスク追加</button>
        </form>
    );
}

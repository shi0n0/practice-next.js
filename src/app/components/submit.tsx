"use client"

import { use, useState } from "react";

interface SubmitProps {
    onAddTask: (task: string) => void; // onAddTask の型情報を指定
  }

export default function Submit({onAddTask}: SubmitProps) {
    const [task,setTask] = useState<string>("");

    const addTask = () => {
        onAddTask(task)
        setTask("");
      };

    return(
        <form action="" className="flex flex-col">
            <input type="text" onChange={(e) => setTask(e.target.value)} value={task} className="p-2 border rounded my-2 focus:outline-none" />
            <button onClick={addTask} className="text-white bg-blue-500 p-2 transform my-2 hover:bg-blue-400 hover:scale-95 duration-100">タスク追加</button>
        </form>
    );
}

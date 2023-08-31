"use client"

import { editTodo,deleteTodo } from "@/api";
import { Task } from "@/type"
import { Input } from "postcss";
import { useState } from "react";

interface TodoProps {
    todo: Task;
}

export default function Todo({ todo }: TodoProps) {
const [isEditing, setIsEditing] = useState(false)
const [editedTaskTitle, setEditTaskTitle] =useState(todo.text)

    const handleEdit = async () => {
        setIsEditing(true)
    }

    const handleSave = async () => {
        await editTodo(todo.id, editedTaskTitle)
        setIsEditing(false)
    }
 
    const handleDelete = async () => {
        await deleteTodo(todo.id);
    } 

    return (
        <li key={ todo.id } className="flex justify-between p-3">
        { isEditing ? (<input type="text" className="p-1 border border-gray-400 rounded focus:outline-none" value={ editedTaskTitle } onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditTaskTitle(e.target.value)} />) : (<span>{todo.text}</span>) }
        <div className="flex gap-2">
            { isEditing ? (<button className="text-gray-700" onClick={handleSave}>登録</button>) : (<button className="text-gray-700" onClick={handleEdit}>編集</button>)}
            <button className="text-red-400" onClick={handleDelete}>削除</button>
        </div>
    </li>
    )
} 
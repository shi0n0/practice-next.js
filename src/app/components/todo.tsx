"use client"

import { editTodo,deleteTodo } from "@/api";
import { Task } from "@/type"
import { useState } from "react";
import ImageComponent from "./image";

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
        <li key={ todo.id } className="flex justify-between p-3 w-full h-full">
        { isEditing ? (<input type="text" className="p-1 border border-gray-400 rounded focus:outline-none" value={ editedTaskTitle } onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditTaskTitle(e.target.value)} />) : (
        <div className="w-full h-96">
            <div className="flex justify-between">
                <span>{todo.text}</span>
                <div className="flex gap-2">
                { isEditing ? (<button className="text-gray-700 py-1 px-2 rounded-lg hover:bg-gray-200 duration-300" onClick={handleSave}>登録</button>) : (<button className="text-gray-700 py-1 px-2 rounded-lg hover:bg-gray-200 duration-300" onClick={handleEdit}>編集</button>)}
                <button className="text-red-400 py-1 px-2 rounded-lg hover:bg-gray-200 duration-300" onClick={handleDelete}>削除</button>
                </div>
            </div>
            <ImageComponent />
        </div>) }
    </li>
    )
} 
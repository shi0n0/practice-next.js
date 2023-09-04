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
        <li key={ todo.id } className="w-full h-full mb-2 bg-blue-100 rounded-t-lg border">
        { isEditing ? (
        <div className="w-full flex justify-between bg-blue-50 p-3 rounded-t-lg">
            <input type="text" className="border border-gray-400 rounded focus:outline-none" value={ editedTaskTitle } onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditTaskTitle(e.target.value)} />
            <div className="gap-2">
                <button className="text-gray-700 py-1 px-2 rounded-lg hover:bg-gray-200 duration-300" onClick={handleSave}>登録</button>
                <button className="text-red-400 py-1 px-2 rounded-lg hover:bg-gray-200 duration-300" onClick={handleDelete}>削除</button>
            </div>
        </div>
        ): 
        (
        <div className="w-full flex justify-between bg-blue-50 p-3 rounded-t-lg">
            <span>{todo.text}</span>
            <div className="gap-2">
                <button className="text-gray-700 py-1 px-2 rounded-lg hover:bg-gray-200 duration-300" onClick={handleEdit}>編集</button>
                <button className="text-red-400 py-1 px-2 rounded-lg hover:bg-gray-200 duration-300" onClick={handleDelete}>削除</button>
            </div>
        </div>
        ) }
        <div className="w-full">
            <ImageComponent />
        </div>
    </li>
    )
} 
"use client"

import { Task } from "@/type"
import { Input } from "postcss";
import { useState } from "react";

interface TodoProps {
    todo: Task;
}

export default function Todo({ todo }: TodoProps) {
const [isEditing, setIsEditing] = useState(false)

    const handleEdit = async () => {
        setIsEditing(true)
    }

    return (
        <li key={ todo.id } className="flex justify-between p-3">
        { isEditing ? (<input type="text" />) : (<span>{todo.text}</span>) }
        <div className="flex gap-2">
            <button className="text-gray-700" onClick={handleEdit}>編集</button>
            <button className="text-red-400">削除</button>
        </div>
    </li>
    )
} 
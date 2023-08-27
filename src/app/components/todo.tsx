import { Task } from "@/type"

interface TodoProps {
    todo: Task;
}

export default function Todo({ todo }: TodoProps) {
    return (
        <li key={ todo.id } className="flex justify-between p-3">
        <span>{todo.text}</span>
        <div className="flex gap-2">
            <button className="text-gray-700">編集</button>
            <button className="text-red-400">削除</button>
        </div>
    </li>
    )
} 
import React from "react"

const Task = () => {
    return(
        <ul className="border-l-4 rounded-l p-2 border-blue-400 bg-gradient-to-r from-blue-200 shadow">
            <li className="flex justify-between p-3">
                <span>Next.jsの勉強</span>
                <div className="flex gap-2">
                    <button className="text-gray-700">編集</button>
                    <button className="text-red-400">削除</button>
                </div>
            </li>
        </ul>
    )
}

export default Task;
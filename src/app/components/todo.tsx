import { deleteTodo } from "@/api";
import { useState } from "react";
import { Tasks } from "@prisma/client";
import { redirect } from "next/navigation";


const Todo = ({ task }: { task: Tasks }) => {
  const handleDelete = async () => {
    "use server";
    try {
      await deleteTodo(task.id);
      redirect("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li
      key={task.id}
      className="w-full h-full mb-2 bg-blue-100 rounded-t-lg border"
    >
      <div className="w-full flex justify-between bg-blue-50 p-3 rounded-t-lg">
        <span>{task.text}</span>
        <div className="gap-2">
          <button className="text-gray-700 py-1 px-2 rounded-lg hover:bg-gray-200 duration-300">
            編集
          </button>
          <form>
            <button
              type="submit"
              className="text-red-400 py-1 px-2 rounded-lg hover:bg-gray-200 duration-300"
              formAction={handleDelete}
            >
              削除
            </button>
          </form>
        </div>
      </div>
    </li>
  );
};

export default Todo;

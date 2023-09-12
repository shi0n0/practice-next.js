"use client";
import { addTodo } from "../../../api";
import { useRef } from "react";

const AddTodo = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const add = async (data: FormData) => {
    await addTodo(data);
    if (formRef.current) formRef.current.reset();
  };

  return (
    <form action={add} ref={formRef}>
      <div className="mt-3">
        <input
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          type="text"
          name="text"
          placeholder="新しいタスクを入力"
        />
        <button
          type="submit"
          className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-100 ease-in-out focus:outline-none"
        >
          タスクを追加
        </button>
      </div>
    </form>
  );
};

export default AddTodo;

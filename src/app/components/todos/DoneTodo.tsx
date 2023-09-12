"use client"
import { useTransition } from 'react';
import { doneTodo } from '@/api';

const DoneTodo = ({
  id,
  isCompleted,
}: {
  id: number,
  isCompleted: boolean,
}) => {
  let [isPending, startTransition] = useTransition();

  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        onChange={() => startTransition(() => doneTodo(id, isCompleted))}
        checked={isCompleted}
        type="checkbox"
        className="h-5 w-5 text-blue-600 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:ring focus:ring-blue-300 transition-colors"
      />
    </label>
  );
};

export default DoneTodo;

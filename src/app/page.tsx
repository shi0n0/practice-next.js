import prisma from '../../prisma/prisma';
import { deleteTodo } from '@/api'; '../api'
import AddTodo from './api/todos/AddTodo';
import { startTransition } from 'react';
import DoneTodo from './api/todos/DoneTodo';


const Page = async() => {
  const tasks = await prisma.tasks.findMany();

  const doneTodo = async (data: FormData) => {
    'use server';
    const id = data.get('id') as string;
    console.log(id);
  };

  return (
      <div>
        <h1 className='text-xl font-bold text-gray-700 p-2'>Todo List</h1>
        <div className='bg-white rounded-lg p-4'>
          <ul>
            {tasks.map((task) => (
              <li className={`p-1 flex justify-between items-center ${
                task.isCompleted ? 'line-through' : ''
              }`} key={task.id}>
                <div className="flex items-center">
                  <div className="mr-2">
                    {task.text}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {task.createdAt.toLocaleDateString()}
                  </div>
                </div>
                <form className='flex'>
                  <input type="hidden" name="id" value={task.id} />
                  <DoneTodo id={task.id} isCompleted={task.isCompleted}/>
                  <button
                  type='submit'
                  className="text-red-600 hover:text-red-800 focus:outline-none"
                  formAction={deleteTodo} // ボタンがクリックされたときの削除処理を実行する関数を設定
                  >
                  削除
                  </button>
                </form>
              </li>
            ))}
          </ul>
          <AddTodo />
        </div>
      </div>
    )
  }

export default Page;
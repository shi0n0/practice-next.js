import { getAllTodos } from '@/api';
import Submit from './components/submit';
import Task from './components/todolist';

export default async function Page() {
  const todos = await getAllTodos()

  return (
      <div>
        <h1 className='text-xl font-bold text-gray-700 p-2'>Todo List</h1>
        <div className='bg-white rounded-lg p-4'>
            <Submit /> 
          <div className='my-2'>
            <Task todos={todos} />
          </div>
        </div>
      </div>
  )
}


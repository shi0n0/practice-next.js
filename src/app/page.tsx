import Submit from './components/submit';
import Task from './components/task';

export default function Page() {
  return (
      <div>
        <h1 className='text-xl font-bold text-gray-700 p-2'>Todo List</h1>
        <div className='bg-white rounded-lg p-2'>
          <Submit />
          <Task />
        </div>
      </div>
  )
}


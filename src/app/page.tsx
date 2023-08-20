import Submit from './submit';
import Task from './task';

export default function Page() {
  return (
      <div>
        <h1 className='text-xl p-2'>Todolist</h1>
        <Task />
        <Submit />
        <p>this is top page!</p>
      </div>
  )
}


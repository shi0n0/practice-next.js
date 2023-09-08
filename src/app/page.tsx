import prisma from '../../prisma/prisma';

const Page = async() => {
  const tasks = await prisma.tasks.findMany();

  const addTodo = async() => {
    "use server"
     console.log('タスク追加ボタンが押されました');
  };

  return (
      <div>
        <h1 className='text-xl font-bold text-gray-700 p-2'>Todo List</h1>
        <div className='bg-white rounded-lg p-4'>
          <ul>
            {tasks.map((task) => (
              <li className='p-1' key={task.id}>{task.text}</li>
            ))}
          </ul>
          <form action={addTodo}>
            <div className='mt-3'>
              <input
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="新しいタスクを入力"
              />
              <button
                type='submit'
                className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-100 ease-in-out focus:outline-none"
              >
                タスクを追加
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

export default Page;
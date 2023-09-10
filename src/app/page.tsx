import { revalidatePath } from 'next/cache';
import prisma from '../../prisma/prisma';

const Page = async() => {
  const tasks = await prisma.tasks.findMany();

  const addTodo = async(data: FormData) => {
    "use server"
     const text = data.get('text') as string;
     await prisma.tasks.create({ data: { text } });
     revalidatePath('/');
  };

  const deleteTodo = async (data: FormData) => {
    "use server"
    const id = data.get("id") as string;
    await prisma.tasks.delete({
      where: {
        id: Number(id),
      },
    });
    revalidatePath('/');
  }
  

  return (
      <div>
        <h1 className='text-xl font-bold text-gray-700 p-2'>Todo List</h1>
        <div className='bg-white rounded-lg p-4'>
          <ul>
            {tasks.map((task) => (
              <li className='p-1 flex justify-between items-center' key={task.id}>
                <div className="flex items-center">
                  <div className="mr-2">
                    {task.text}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {task.createdAt.toLocaleDateString()}
                  </div>
                </div>
                <form>
                  <input type="hidden" name="id" value={task.id} />
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
          <form action={addTodo}>
            <div className='mt-3'>
              <input
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              type="text"
              name='text'
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
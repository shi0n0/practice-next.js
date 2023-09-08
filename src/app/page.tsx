import prisma from '../../prisma/prisma';

const Page = async() => {
  const tasks = await prisma.tasks.findMany();

  return (
      <div>
        <h1 className='text-xl font-bold text-gray-700 p-2'>Todo List</h1>
        <div className='bg-white rounded-lg p-4'>
          <div className='my-2'>
          <ul className="mt-8">
            {tasks.map((task) => (
              <li key={task.id}>{task.text}</li>
            ))}
          </ul>
          </div>
        </div>
      </div>
  )
}

export default Page;
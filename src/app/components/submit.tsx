export default function Submit() {
    return(
        <form action="" className="flex flex-col">
            <input type="text" className="p-2 m-2 border rounded focus:outline-none" />
            <button className="text-white bg-blue-500 p-2 m-2 transform hover:bg-blue-400 hover:scale-95 duration-100">タスク追加</button>
        </form>
    );
}

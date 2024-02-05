import { useEffect, useState } from "react";
import Task from "./Task";

const App = () => {
  const dataStorage = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState(dataStorage);

  const handleSubmit = (e) => {
    e.preventDefault();
    title.trim() !== "" && description.trim() !== ""
      ? (setTasks([...tasks, { title, description }]),
        setTitle(""),
        setDescription(""))
      : alert("Title and description cannot be empty!");
  };

  const deleteTask = (index) => {
    const filteredArr = tasks.filter((val, i) => {
      return i !== index;
    });
    setTasks(filteredArr);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <h1 className="text-4xl font-bold font-serif text-center m-4">
        TO-DO LIST
      </h1>
      <form className="flex flex-col justify-center items-center m-10  space-y-10 ">
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Your Task"
          className="bg-gray-50 ring-0 outline-none border border-neutral-500 text-neutral-900 text-sm rounded-lg block w-full lg:w-1/2 md:w-96 p-2.5 checked:bg-emerald-500"
        />

        <textarea
          placeholder="Enter Description"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
          className="p-4 w-full lg:w-1/2 md:w-96 rounded-md text-neutral-900 min-h-30"
        ></textarea>

        <button
          type="submit"
          onClick={handleSubmit}
          className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-white bg-opacity-80 text-[#000000] rounded-3xl  font-semibold shadow-md hover:bg-gradient-to-r from-blue-800 to-cyan-300 hover:text-white transition duration-300"
        >
          Add Task
        </button>
      </form>
      {tasks.map((item, index) => (
        <div
          className="flex flex-col items-center justify-center mx-auto my-8 w-full md:w-96 lg:w-1/2 bg-black bg-opacity-55 shadow-md backdrop-filter backdrop-blur-md border border-white border-opacity-18 rounded-lg p-4  "
          key={index}
        >
          <Task
            key={index}
            title={item.title}
            date={item.date}
            time={item.time}
            description={item.description}
            deleteTask={deleteTask}
            index={index}
          />
        </div>
      ))}
    </div>
  );
};

export default App;

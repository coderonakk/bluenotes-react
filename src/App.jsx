import { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  const [task, settask] = useState([]);

  const formhandler = (e) => {
    e.preventDefault();

    const copytask = [...task];

    if (title.trim() && details.trim()) {
      copytask.push({ title, details });
    }

    settask(copytask);

    settitle("");
    setdetails("");
  };

  const deleteNote = (idx) => {
    const copytask = [...task];

    copytask.splice(idx, 1);

    settask(copytask);
  };

  return (
    <div className="bg-[#a1d2f1] text-black h-screen">
      <div className="flex">
        <form
          onSubmit={(e) => {
            formhandler(e);
          }}
          className="flex flex-col gap-4 p-5 w-2/3"
          action=""
        >
          <h1 className="text-3xl font-bold">Add Notes</h1>
          <input
            className="outline-none px-5 py-2 border-2 rounded"
            type="text"
            placeholder="Enter task heading"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <textarea
            className="outline-none px-5 py-2 border-2 rounded h-20"
            type="text"
            placeholder="Enter task details"
            value={details}
            onChange={(e) => {
              setdetails(e.target.value);
            }}
          />
          <button className=" bg-[url('https://images.unsplash.com/photo-1617801003287-1a71d7792fdc?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center  bg-white text-black px-5 py-2 border-2 rounded">
            Save Task
          </button>
        </form>

        <div className="w-auto">
          <img
            className="rounded h-55 mt-12"
            src="https://plus.unsplash.com/premium_vector-1720951733734-ab79b62106a0?q=80&w=1083&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>

      <div className="px-10 flex flex-col bg-[#a1d2f1] h-fit overflow-auto">
        <h1 className="text-3xl font-bold pt-5">Your Notes</h1>
        <div className="flex gap-5 py-5 flex-wrap overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="bg-[url('https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?q=80&w=678&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]   text-black bg-cover h-50 w-40 rounded p-3 flex flex-col justify-between items-start"
              >
                <div>
                  <h3 className="leading-tight text-2xl font-bold ">
                    {elem.title}
                  </h3>
                  <p className="leading-tight text-gray-700 px-1 text-xs pt-1 h-20 overflow-auto scrollbar-none">
                    {elem.details}
                  </p>
                </div>

                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="bg-red-600 bg-cover text-white bg-center w-full rounded-4xl font-bold text-xs p-1 cursor-pointer active:scale-95"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

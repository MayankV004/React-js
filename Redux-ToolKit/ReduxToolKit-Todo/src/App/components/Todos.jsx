import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../../features/todo/todoSlice";
import { HiOutlineTrash } from "react-icons/hi";
import { LuPen } from "react-icons/lu";
import { BsCheckLg } from "react-icons/bs";

function Todos() {
  const selector = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [EditID, setEditID] = useState(null);
  const [input, setInput] = useState("");

  const startEditing = (id, text) => {
    setEditID(id);
    setInput(text);
  };

  const handleUpdate = () => {
    if (input.trim() !== "") {
      dispatch(updateTodo({ id: EditID, text: input }));
      setEditID(null);
      setInput("");
    }
  };

  return (
    <ul className="list-none">
      {selector.map((todo) => (
        <li
          key={todo.id}
          className="mt-4 flex justify-between items-center bg-black/10 px-4 py-2 rounded"
        >
          {EditID === todo.id ? (
            <input
              type="text"
              className="bg-transparent rounded-l-md border-none outline-none text-green-600 py-0 pr-2 w-full"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          ) : (
            <div className="text-white">{todo.text}</div>
          )}

          <div className="flex items-center justify-between gap-2">
            {EditID === todo.id ? (
              <button
                onClick={handleUpdate}
                className="text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-gradient-to-r from-black to-green-500 rounded text-md"
              >
                <BsCheckLg />
              </button>
            ) : (
              <button
                onClick={() => startEditing(todo.id, todo.text)}
                className="text-white bg-green-600 border-0 py-1 px-4 focus:outline-none hover:bg-gradient-to-r from-black to-pink-500 rounded text-md"
              >
                <LuPen />
              </button>
            )}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-600 border-0 py-1 px-4 focus:outline-none hover:bg-red-700 rounded text-md"
            >
              <HiOutlineTrash />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Todos;

import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return ( 
    <div className="border border-white-700 p-4 m-auto flex flex-col gap-3 bg-red-400 rounded-sm">
      <h2 className="m-1 ">Login</h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="p-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="p-2 rounded-lg"
        />
        <button 
        onClick={handleSubmit} 
        className="bg-blue-200 text-black"
        >Submit
        </button>
      </div>
    </div>
  );
}

export default Login;

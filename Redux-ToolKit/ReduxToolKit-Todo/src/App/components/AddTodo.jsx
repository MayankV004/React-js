import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../../features/todo/todoSlice'
 
function AddTodo() {
    const [input , setInput] = useState("")
    const dispatch = useDispatch()
    const addTodoHandler = (e)=> {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }
  return (
    <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
        <input 
        type="text"
        className='bg-black/40 rounded-l-md border border-black focus:border-red-500 focus:ring-2 outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        placeholder='Enter a Todo...'
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        />
        <button 
        type="submit"
        className='bg-purple-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded-r-md text-lg text-white'
        >
            Add Todo
        </button>
    </form>
  )
}

export default AddTodo
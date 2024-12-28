import { useState } from 'react'
import './App.css'
import Card from '/src/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold bg-green-300 p-4 rounded-2xl text-black" >
        TailWind Test
    </h1>
      <Card username="Kendal" btnText='Visit ME'/>
      <Card username="Angela"/>
    </>
  )
}

export default App

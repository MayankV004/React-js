import { useState } from 'react';
function App() {
  const [color , setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200'
        style={{backgroundColor:color}}>

          <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 p-12'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
              <button onClick={()=>setColor('green')} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:'green'}}>
              Green
              </button>
              <button onClick={()=>setColor('magenta')} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:'magenta'}}>
              Magenta
              </button>
              <button onClick={()=>setColor('red')} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:'red'}}>
              Red
              </button>
              <button onClick={()=>setColor('teal')} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:'teal'}}>
              Teal
              </button>
              <button onClick={()=>setColor('lavender')} className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:'lavender'}}>
              Lavender
              </button>
              <button onClick={()=>setColor('cyan')} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:'cyan'}}>
              Cyan
              </button>
              <button onClick={()=>setColor('#CB997E')} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:'#CB997E'}}>
              Muted Pink
              </button>
              <button onClick={()=>setColor('#90E0EF')} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:'#90E0EF'}}>
              Light Blue
              </button>


            </div>

          </div>
      
      </div>
    </>
  )
}

export default App

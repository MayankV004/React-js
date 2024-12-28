import './App.css'
import "@fontsource/poppins"; // Import all weights and styles
import Background from './components/Background';
import Foreground from './components/Foreground';

function App() {
  

  return (
   <>
   <main >
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background/>
      <Foreground/>
    </div>
    
   </main>
   </>
  )
}

export default App

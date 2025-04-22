import './App.css'
import HomePage from './pages'
import { useState } from 'react'
const App = () =>{
   
  const [showHome, setShowHome] = useState(true)

  return (
    <div>
      <button onClick={() => setShowHome(!showHome)}>
        {showHome ? "Sembunyikan" : "Tampilkan"} HomePage
      </button>

      <hr />

      {showHome && <HomePage />}
    </div>
  )
}

export default App

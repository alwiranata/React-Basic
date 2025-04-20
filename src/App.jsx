import './App.css'
import HomePage from './pages'
const App = () =>{
  const value = true

  return (
    <>
    <div className='App'>
      {value ? <div>Data Getted</div>  : "Data Not Found"}
      <HomePage/>
    </div>
    </>
  )
}

export default App

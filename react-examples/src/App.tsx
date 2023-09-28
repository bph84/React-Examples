import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreationGrid from './Components/CreationGrid'
import UserSettings from './Components/UserSettings'
import MainTable from './MainTable'

function App() {
  
    //const [count, setCount] = useState(0)

  return (
    <>
      
      <CreationGrid />

      <MainTable />

      <UserSettings />
      
    </>
  )
}

export default App

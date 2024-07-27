import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'; 

import { firebaseInit } from './config/firebaseConfig';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { app, storage } = firebaseInit();

  return (
    <>

      <h1>Vite + React</h1>
    </>
  )
}

export default App

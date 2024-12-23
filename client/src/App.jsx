import { useState } from 'react'

import ChatInterface from './components/ChatInterface'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar/>
      {/* <ChatInterface /> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/chat' element={<ChatInterface/>}></Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App

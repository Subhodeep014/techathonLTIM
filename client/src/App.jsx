import { useState } from 'react'

import ChatInterface from './components/ChatInterface'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import SidebarChat from './components/SidebarChat'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      {/* <ChatInterface /> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/chat' element={<ChatInterface/>}></Route>
        <Route path='/chat-test' element={<SidebarChat/>}></Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Content from './Components/Content'


export default function App() {
  return (
    <div>
      <BrowserRouter>

      <Content/>

      </BrowserRouter>

    </div>
    
  ) 
}
import { useState } from 'react'
import Userinput from './pages/Userinput'

import './App.css'

function App() {


  return (
    <>
      <div >
        <h1 className='text-center'>Expense Tracker</h1>
        {/* add */}
        <Userinput/>
        {/* display -delete */}
        
        
      </div>
    </>
  )
}

export default App

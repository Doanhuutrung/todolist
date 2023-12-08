import React from 'react'
import './App.css'
import Todoform from './component/Todoform'

const App = () => {
  return <div className="app">
    <form className='todo-form'>
      <Todoform placeholder = "Input item todo" />
    </form>
  </div>
}

export default App;
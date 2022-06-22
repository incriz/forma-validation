import React from 'react'
import './App.css'

const App = () => {

  return (
    <div className='app'>
      <form action="">
        <h1>Регистрация</h1>
        <input type="text" name='email' placeholder='Enter your email...' />
        <input type="password" name='password' placeholder='Enter your password...' />
        <button type='submit'>Registration</button>
      </form>
      
    </div>
  )
}

export default App
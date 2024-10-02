import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './redux/counterSlice'
import ParentComponent from './redux/components/ParentComponent'
function App() {
  
  const count = useSelector((store) => store.counter.count)

  let dispatch = useDispatch();


  return (
    <>
    <h1>Redux Toolkit - Intro</h1>
    <h2>Current count: {count} </h2>
    <button onClick={() => {dispatch(increment(10))}}>Increment</button>
    <button onClick={() => {dispatch(decrement())}}>Decrement</button>
    <ParentComponent/>
    </>
  )
}

export default App

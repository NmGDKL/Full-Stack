import React, { useState , useEffect } from 'react'

const UseEffectComp = () => {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(4)

  useEffect(() => {
    console.log('useEffectComp');
    // count !== 0 && alert(`new notification, total: ${count}`)
    // setCount(count + 1)
    let timer = setTimeout(() => {
      alert('hello')
    }, 3000)
    return () => {
      console.log('cleanup');
      clearTimeout(timer)
    }
  }, [count])



  // const increase = () => setCount(count + 1)
  const increase = () => setCount((count) => count + 1)
  const increaseAge = () => setAge(age + 1)

  return (
    <div className="function">
      <h2>Functional Component</h2>
      <p>Count: {count} </p>
      <button onClick={increase}>Increase Count</button>
      <p>Age: {age} </p>
      <button onClick={increaseAge}>Increase Age</button>
      
    </div>
  )
}

export default UseEffectComp

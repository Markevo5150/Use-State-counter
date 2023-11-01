import { useState } from 'react'
import { Button } from './components'
import './app.scss'

function App() {
  const [counter, setCounter] = useState(0)

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const actionType = e.currentTarget.getAttribute('data-variant')

    if (actionType === 'minus') setCounter((prevState) => prevState - 1)
    if (actionType === 'reset') setCounter(0)
    if (actionType === 'add') setCounter((prevState) => prevState + 1)
  }

  return (
    <div className="content">
      <span className="counter">{counter}</span>
      <div className="btnBox">
        <Button data-variant="minus" id="minus" onClick={handleClick}>
          -1
        </Button>
        <Button
          data-variant="reset"
          id="reset"
          onClick={handleClick}
          variant="reset"
        >
          Reset
        </Button>
        <Button data-variant="add" onClick={handleClick}>
          +1
        </Button>
      </div>
    </div>
  )
}

export default App

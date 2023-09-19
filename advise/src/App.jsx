import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCount] = useState(1)
  const [advise , setadvise] = useState([
    "Indeed in that are signs for a people who give thought.",
    "Seek help through patience and prayer. Indeed, Allah is with the patient.",
    "You will not attain righteousness until you spend from that which you love."
])

 function NextHandler (){
  console.log('next')
  if(counter < 3){
    setCount (counter + 1)
  }
 }

 function PreviousHandler (){
  console.log('Back')
  if(counter > 0){
   setCount (counter - 1)
  }
 }
 

  return (
    <>
    <div className='main'>
    <div className='heading' >

<h1 >ADVISE FOR YOU:</h1>
</div>
      <div className='box'>
        <div className='numCircle'>

        {Array.from([1, 2, 3], e => (
  <div
    style={{
      height: '50px',
      width: '50px',
      borderRadius: '50%',
      backgroundColor: counter >= e ? '#b57e38' : '#daad86',
      textAlign: 'center',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    {e}
  </div>
))}

</div>

    <div className='advisePara'>
      <p className='show Advise'>
        {
          advise[counter -1]
        }

      </p>
    </div>

    <div className='divBtn'>
  {
    Array.from(['Back', 'Next'], x => (
      <button className='btn' onClick={x === 'Back' ? PreviousHandler : NextHandler}>{x}</button>
    ))
  }
</div>


       

      </div>
    </div>
    
    </>
  )
}

export default App

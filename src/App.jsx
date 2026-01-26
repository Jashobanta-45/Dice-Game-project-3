import React, { useState } from 'react'
import Entrypage from './components/Entrypage/Entrypage'
import GAmepage from './components/gamepage/Gamepage'

const App = () => {
const [Ispaly, setIspaly] = useState(false)
   const toggle =()=>{
      setIspaly( (prev)=>!prev)
  
    }
  
  return (
    <div>
      {
        Ispaly ? <GAmepage/> : <Entrypage toggle={toggle}/>
      }
      
    </div>
  )
}

export default App

import { div } from 'framer-motion/client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {
   const [jokes, setjokes] = useState([])
   useEffect(()=>{
      axios.get('/api/jokes')
      .then((response)=>{
        setjokes(response.data)
      })
      .catch((error)=>{
        console.log(error)
      })
   })


  return (
    <div>
     <h1>chai and full stack</h1>
     <p>JOKES {jokes.length}</p>

     {
      jokes.map((joke,index)=>(
      <div key={joke.id}>
        <h2>{joke.title}</h2>
        <p>{joke.content}</p>

        </div>
      ))
     }
    </div>
  )
}

export default App

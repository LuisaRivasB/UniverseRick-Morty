import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './componenets/LocationInfo'
import ResidentInfo from './componenets/ResidentInfo'
import getRandomLocation from './utils/getRandomLocation'

function App() {
    const [location, setlocation] = useState()
    const [numberLocation, setnumberLocation] = useState(getRandomLocation())
    const [hasError, sethasError] = useState(false)

    useEffect (() => {
      const url = `https://rickandmortyapi.com/api/location/${numberLocation}`
      axios.get(url)
        .then(res => {
          setlocation(res.data)
          sethasError(false)
        })
        .catch(err => {
          console.log(err)
          sethasError(true)
        })
    }, [numberLocation]) 
    
    const handleSubmit = e => {
        e.preventDefault()
        setnumberLocation(e.target.inputLocation.value)
    }
    
  return (
    <div className="app">
<<<<<<< HEAD
      <div className= 'container'>
=======
      <div className="container">
>>>>>>> b475cf71985f6741ba846b767e6fafd7ffadaf11
        <h1 className='tittle'>Rick and Morty</h1>
        <form className='form' onSubmit={handleSubmit}>
            <input className='form-input' id='inputLocation' type="text" />
            <button className='form-btn'>Search</button>
        </form>
        </div>
        {
            hasError ?
              <h2 className='error'>Hey! you must provide an is from 1 to 126</h2>
            :
              <>
                  <LocationInfo location={location} />
                  <div className='residents-container'>
                      {
                          location?.residents.map(url => (
                              <ResidentInfo
                                  key={url}
                                  url={url}
                              />
                          ))
                      }
                  </div>
              </>
        }
    </div>
  )
}

export default App

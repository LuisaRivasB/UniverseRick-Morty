import React from 'react'
import './style/locationInfo.css'

const LocationInfo = ({ location }) => {
   
  return (
    <article className='location'>
        <h2 className='location-name'>{location?.name}</h2>
        <ul className='location-list'>
            <li className='location-item'>
              <span className='location-label'>Type: </span>
              {location?.type}
            </li>
            <li className='location-item'>
              <span className='location-label'>Dimension: </span>
              {location?.dimension}
            </li>
            <li className='location-item'>
              <span className='location-label'>Population: </span>
              {location?.residents.length}
            </li>
        </ul>
    </article>
  )
}

export default LocationInfo
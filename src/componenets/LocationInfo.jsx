import React from 'react'
import './style/locationInfo.css'

const LocationInfo = ({ location }) => {
   
  return (
    <article className='location'>
      <div className='location__container'>
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
      </div>
    </article>
  )
}

export default LocationInfo
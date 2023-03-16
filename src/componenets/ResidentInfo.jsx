import axios from 'axios'
import React, { useEffect, useState} from 'react'
import './style/residentInfo.css'

const ResidentInfo = ({ url }) => {
    const [character, setcharacter] = useState()
    useEffect(() => {
        axios.get(url)
        .then(res =>setcharacter(res.data))
        .catch(err => console.log(err))
    }, [])

    
  return (
    <article className='card'>
        <header className='header-card'>
            <img className='img-card' src={character?.image} alt="" />
            <div className='container-circle'>
                <span className='circle'></span>
                <span className='status'>{character?.status}</span>
            </div>
        </header>
        <section className='card-body'>
            <h3 className='card-name'>{character?.name}</h3>
            <hr className='card-hr' />
            <ul className='card-list'>
                <li className='card-item'>
                    <span className='card-label'>Specie: </span>
                    {character?.species}
                </li>
                <li className='card-item'>
                    <span className='card-label'>Origin: </span>
                {character?.origin.name}
                </li>
                <li className='card-item'>
                    <span className='card-label'>Episodes where appear: </span>
                    {character?.episode.length}
                </li>
            </ul>
        </section>
   
    </article>
  )
}

export default ResidentInfo
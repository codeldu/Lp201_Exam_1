import axios from 'axios';
import React, { useEffect, useState } from 'react'


export const Favorites = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/favorites/').then(res=> setInfo(res.data));
    }, [])
    

  return (
    <>
    {info.map((element)  => {
        return (
            <div key={element.id} className='cardProduct'>
                <h1>{element.name}</h1>
                <h2>{element.price}</h2>
                <p>{element.year}</p>
            </div>
        )
    })}
    </>
  )
}

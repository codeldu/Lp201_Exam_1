import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';




export const Home = () => {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/').then(res => setInfo(res.data));
    }, [])

    const addToFav = (id) => {

        axios.get('http://localhost:3000/api/' + id).then(
            res => axios.post('http://localhost:3000/favorites/', res.data).then(res => console.log(res.json))
        )

    }

    return (
        <>
            {info.map((element) => {
                return (
                    <div key={element.id} className='cardProduct'>
                        <h1>{element.name}</h1>
                        <h2>{element.price}</h2>
                        <p>{element.year}</p>
                        <button onClick={() => addToFav(element.id)}>♥
                        </button>
                    </div>
                )
            })}
        </>
    )
}

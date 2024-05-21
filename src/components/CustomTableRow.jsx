import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'


export const CustomTableRow = ({id, name, price, year, trigger, setTrigger}) => {

    const deleteElement = (id) =>{
        axios.delete('http://localhost:3000/api/'+id).then(
            res=> setTrigger(!trigger)
        )
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{year}</td>
            <td><Link to={'/edit/'+id}><button>Edit</button></Link></td>
            <td><button onClick={()=>deleteElement(id)}>Delete</button></td>
        </tr>
    )
}

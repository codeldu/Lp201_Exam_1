import React, { useState, useEffect } from 'react'
import { CustomTable } from '../components/CustomTable'
import { CustomTableRow } from '../components/CustomTableRow'
import axios from 'axios'
import { Add } from './Add'
import { Link } from 'react-router-dom'





export const Admin = () => {

    const [info, setInfo] = useState([]);
    const [deleteToggle, setDeleteToggle] = useState(true);
    const [value, setValue] = useState("")
    const [change, setChange] = useState("def")

    useEffect(() => {
        axios.get('http://localhost:3000/api/').then(res => setInfo(res.data));
    }, [deleteToggle])


    const filterData = () => {

    
            
        if (change == 'inc') {
            return searchData().toSorted((a, b) => a.price - b.price)
        } else if( change == 'dec '){
            return searchData().toSorted((a, b) => b.price - a.price)
        } else { return searchData()
        }

    }

    const searchData = () => {
        return info.filter(inf => inf.name.toUpperCase().startsWith(value.toUpperCase()))
    }

    return (
        <>

            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <input type="text" onInput={(e) => setValue(e.target.value)} />
                <select onChange={(e) => setChange(e.target.value)}>
                    <option value="def">Default</option>
                    <option value="inc">Artan</option>
                    <option value="dec">Azalan</option>
                </select>
            </div>


            <CustomTable>
                {filterData().map(element => <CustomTableRow id={element.id} name={element.name} year={element.year} price={element.price} trigger={deleteToggle} setTrigger={setDeleteToggle} />)}

            </CustomTable>

            <Link to='/add'> <button className='create'>Add new element</button></Link>
        </>
    )
}

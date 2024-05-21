import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'



export const Edit = () => {

    const {id} = useParams();

    const [info, setInfo] = useState({});

    useEffect(() => {
        axios.get('http://localhost:3000/api/'+id)
        .then(res=> setInfo(res.data))
    }, [])
    
    

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({defaultValues : async ()=> axios.get('http://localhost:3000/api/'+id)})


    const onSubmit = (obj) => {
        axios.patch( ' http://localhost:3000/api/'+id,obj)
        
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'column', width: '35%'}}>
            <label > Name :
                <input {...register("name")} defaultValue={info.name} />
            </label>
            <label > Price :
                <input {...register("price")} type='number' defaultValue={info.price}/>
            </label>
            <label > Year :
                <input {...register("year")} type='number' defaultValue={info.year}/>
            </label>

            <button type="submit" >Add element</button>
        </form>
    )

}

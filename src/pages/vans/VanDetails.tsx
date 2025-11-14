import {useEffect, useState, type JSX} from "react";
import {Link, useParams} from "react-router-dom";


interface Van {
    id : string,
    name : string,
    price : number,
    description : string,
    imageUrl : string,
    type : string
}

export default function VanDetails():JSX.Element {

    const {id} = useParams<{id : string}>()
    const [ van , setVans ] = useState <Van | null> (null)

    useEffect(function (){
        fetch(`http://localhost:8000/api/vans/`)
            .then( res => res.json())
            .then( (vanData:Van[]) => {
                const selectedVan :Van|null = vanData.find( v => v.id === id ) || null
                setVans(selectedVan)
            })

    },[id])

    return(
        <div className="van-detail-container">
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} alt={van.name}/>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}
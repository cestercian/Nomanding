import  {type JSX} from 'react'
import * as React from "react";
import {Link, useSearchParams} from "react-router-dom";


interface Van {
    id : string,
    name : string,
    price : number,
    description : string,
    imageUrl : string,
    type : string

}

export default function Vans():JSX.Element {

    const [vansData, setVansData ] = React.useState<Van[]>([])

    const [ searchParams , setSearchParams ] = useSearchParams()

    const typeFilter = searchParams.get("type")

    React.useEffect(function () {

        fetch('http://localhost:8000/vans')
            .then( res => res.json() )
            .then( (resData: Van[]) =>  setVansData(resData) )

    },[])

    const displayedVans : Van[] = typeFilter
        ? vansData.filter( van => van.type === typeFilter )
        : vansData

    const vanElements :JSX.Element[] = displayedVans.map((van: Van) => (
        <div key={van.id} className="van-tile" >
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} alt={van.name}/>
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    return(
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button onClick={()=>{ setSearchParams({ type:"simple" })}} className="van-type simple">Simple</button>
                <button onClick={()=>{ setSearchParams({ type:"luxury" })}} className="van-type luxury">Luxury</button>
                <button onClick={()=>{ setSearchParams({ type:"rugged" })}} className="van-type rugged">Rugged</button>
                { typeFilter ? (<button onClick={() => {
                }} className="van-type clear-filters">Clear Filter</button>) : null }
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
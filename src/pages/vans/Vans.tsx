import {type JSX, useState} from 'react'
import * as React from "react";
import {Link, useSearchParams} from "react-router-dom";
import getVans from "../../api/api.ts";
import type {Van} from "../../types/types.ts";




export default function Vans():JSX.Element {

    const [vansData, setVansData ] = React.useState<Van[]>([])

    const [ searchParams , setSearchParams ] = useSearchParams()

    const typeFilter = searchParams.get("type")

    const [ loading , setLoading ] = useState(false)

    React.useEffect( () => {
        async function loadVans() {
            setLoading(true)
            try {
                const resData: Van[] = await getVans()
                setVansData(resData)
            }catch(err) {
                console.log("There was an error!")
                console.log(err)
            }
            setLoading(false)
        }
        loadVans()
    },[])

    const displayedVans : Van[] = typeFilter
        ? vansData.filter( van => van.type === typeFilter )
        : vansData

    const vanElements :JSX.Element[] = displayedVans.map((van: Van) => (
        <div key={van.id} className="van-tile" >
            <Link to={`${van.id}`} state={{ search : `?${searchParams.toString()}` }}>
                <img src={van.imageUrl} alt={van.name}/>
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    if(loading){
        return <h1>Loading....</h1>
    }

    return(
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button
                    onClick={()=>{ setSearchParams({ type:"simple" })}}
                    className={`van-type simple ${typeFilter === "selected" ? "selected" : ""}`}>Simple</button>
                <button
                    onClick={()=>{ setSearchParams({ type:"luxury" })}}
                    className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}>Luxury</button>
                <button
                    onClick={()=>{ setSearchParams({ type:"rugged" })}}
                    className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}>Rugged</button>
                { typeFilter
                    ? (<button onClick={()=>{setSearchParams()}} className="van-type clear-filters">Clear Filter</button>)
                    : null }
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
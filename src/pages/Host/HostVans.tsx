import {type JSX, useEffect} from "react";
import * as React from "react";


interface HostedVan {
    name : string,
    price : number,
    imageUrl : string
}

export default function HostVans():JSX.Element {

    const [ hostedVans, setHostedVans ] = React.useState([])

    useEffect(function () {
        fetch(`http://localhost:8000/api/vans/`)
            .then(res => res.json())
            .then( (hostedVansData) => {
                const selectedHostVans =  hostedVansData.filter( v => v.hostId === 123  )
                setHostedVans (selectedHostVans)
            } )
            .then(console.log("servernworking"))
            .catch((err)=> console.log(err))

    },[])

    console.log(hostedVans)

    const hostedVansList :JSX.Element  = hostedVans.map( (van) => (
        <>
            <h1>{van.name}</h1>
            <h2>{van.price}</h2>
            <p>{van.imageUrl}</p>
        </>
    ) )

    console.log(hostedVansList)

    return (
        <>
            {hostedVansList}
        </>
    )
}
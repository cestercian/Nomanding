import {type JSX, useEffect} from "react";
import * as React from "react";


interface HostedVan {
    name : string,
    price : number,
    imageUrl : string
    hostId: number
}

export default function HostVans():JSX.Element {

    const [ hostedVans, setHostedVans ] = React.useState<HostedVan[]>([])

    useEffect(function () {
        fetch(`http://localhost:8000/api/vans/`)
            .then(res => res.json())
            .then( (hostedVansData :HostedVan[] ) => {
                const selectedHostVans : HostedVan[] | [] =  hostedVansData.filter( ( v : HostedVan )  => v.hostId === 123  )
                setHostedVans (selectedHostVans)
            } )
            .catch((err)=> console.log(err))

    },[])


    const hostedVansList :JSX.Element[]  = hostedVans.map( (van) => (
        <>
            <h1>{van.name}</h1>
            <h2>{van.price}</h2>
            <p>{van.imageUrl}</p>
        </>
    ) )

    return (
        <>
            {hostedVansList}
        </>
    )
}
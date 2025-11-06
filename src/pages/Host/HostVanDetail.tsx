import {type JSX, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

interface HostedVan {
    name : string,
    price : number,
    imageUrl : string,
    hostId: string
}

export default function HostVanDetail():JSX.Element {

    const {hostId} = useParams<{hostId: string}>()

    const [ hostedVanDetail , setHostedVanDetail ] = useState<HostedVan | null >(null)

    useEffect(() => {
        fetch('http://localhost:8000/api/vans/')
            .then(res => res.json())
            .then( ( vanData :HostedVan[] ) => {
                const selectedVanData :HostedVan | null = vanData.find( (v:HostedVan ) => v.hostId === hostId )|| null
                setHostedVanDetail(selectedVanData)
            } )
    }, []);

    const selectedVanDetail:JSX.Element = hostedVanDetail ? (
        <>
            <h1>{hostedVanDetail.name}</h1>
            <h2>{hostedVanDetail.price}</h2>
            <p>{hostedVanDetail.imageUrl}</p>
        </>
        ) : <></>

    return(
        <>
            {selectedVanDetail}
        </>

    )
}
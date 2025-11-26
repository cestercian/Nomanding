import {type JSX, useEffect} from "react";
import * as React from "react";
import {Link} from "react-router-dom";
import getVans from "../../api/api.ts";
import type {Van} from "../../types/types.ts";



export default function HostVans():JSX.Element {

    const [ hostedVans, setHostedVans ] = React.useState<Van[]>([])

    useEffect( function () {
        getVans()
            .then( (hostedVansData :Van[] ) => {
                const selectedHostVans : Van[] | [] =  hostedVansData.filter( ( v : Van )  => v.hostId === "123"  )
                setHostedVans (selectedHostVans)
            } )
            .catch((err)=> console.log(err))
    },[])


    const hostedVansList :JSX.Element[]  = hostedVans.map( (van) => (

    <Link
        to={`${van.id}`}
        key={van.id}
        className="host-van-link-wrapper"
    >
        <div className="host-van-single" key={van.id}>
            <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
            <div className="host-van-info">
                <h3>{van.name}</h3>
                <p>${van.price}/day</p>
            </div>
        </div>
    </Link>

    ) )

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    hostedVans.length > 0 ? (
                        <section>
                            {hostedVansList}
                        </section>
                    ) : (
                        <h2>Loading...</h2>
                    )
                }
            </div>
        </section>
    )
}
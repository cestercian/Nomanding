import  {type JSX} from 'react'
import * as React from "react";


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

    React.useEffect(function () {
        fetch('http://localhost:8000/vans')
            .then( res => res.json() )
            .then( (resData: Van[]) =>  setVansData(resData) )
    },[])

    const vans:JSX.Element[] = vansData.map((van: Van) => (
        <div key={van.id}>
            <img src={van.imageUrl} alt={van.name} />
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
        </div>
    ))


    return(
        <div>
            <h1>Vanning</h1>
            {vans}
        </div>
    )
}
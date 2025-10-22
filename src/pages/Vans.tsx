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

    const vanElements :JSX.Element[] = vansData.map((van: Van) => (
        <div key={van.id} className="van-tile">
            <img src={van.imageUrl} alt={van.name} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
    ))


    return(
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
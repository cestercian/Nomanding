import {useEffect} from "react";


export default function VanDetails() {


    useEffect(function (){
        fetch("http://localhost:8000/api/vans/1")
            .then( res => res.json())
            .then( vanData => console.log(vanData))

    },[])


    return(
        <h1>VAN DETAILS GOES HERE ::</h1>
    )
}
import {type JSX, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import HostVanDetailLayout from "../../components/HostVanDetailLayout.tsx";

interface HostedVan {
    name : string,
    price : number,
    imageUrl : string,
    id: string
    type:string
}

export default function HostVanDetail():JSX.Element {

    const {hostId} = useParams<{hostId: string}>()

    const [ hostedVanDetail , setHostedVanDetail ] = useState<HostedVan | null>(null)

    useEffect(() => {
        fetch('http://localhost:8000/api/vans/')
            .then(res => res.json())
            .then( ( vanData :HostedVan[] ) => {
                const selectedVanData:HostedVan|null = vanData.find( (v:HostedVan ) => v.id === hostId )||null
                setHostedVanDetail(selectedVanData)
            } )
    }, []);

    const selectedVanDetail:JSX.Element = hostedVanDetail ? (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={hostedVanDetail.imageUrl} alt={'van Image'}/>
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${hostedVanDetail.type}`}
                        >
                            {hostedVanDetail.type}
                        </i>
                        <h3>{hostedVanDetail.name}</h3>
                        <h4>${hostedVanDetail.price}/day</h4>
                    </div>
                </div>
            </div>
            <HostVanDetailLayout/>
        </section>
        ) : <h2>Loading...</h2>

    return(
        selectedVanDetail
    )
}
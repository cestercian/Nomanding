import {type JSX, useEffect, useState} from "react";
import {Link, NavLink, Outlet, useParams} from "react-router-dom";
import * as React from "react";
import getVans from "../../../api/api.ts";

export interface HostedVan {
    name : string,
    price : number,
    imageUrl : string,
    description : string,
    id: string
    type:string
}

export default function HostVanDetail():JSX.Element {

    const {hostId} = useParams<{hostId: string}>()

    const [ hostedVanDetail , setHostedVanDetail ] = useState<HostedVan | null>(null)

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    useEffect(() => {
        getVans()
            .then( ( vanData :HostedVan[] ) => {
                const selectedVanData:HostedVan|null = vanData.find( (v:HostedVan ) => v.id === hostId )||null
                setHostedVanDetail(selectedVanData)
            } )
    }, [hostId]);

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
            <header>
                <nav>
                    <NavLink to={"."} end
                             style={({isActive}): React.CSSProperties | undefined => isActive ? activeStyles : undefined}
                    >Details</NavLink>
                    <NavLink to={"Pricing"}
                             style={({isActive}): React.CSSProperties | undefined => isActive ? activeStyles : undefined}
                    >Pricing</NavLink>
                    <NavLink to={"Photos"}
                             style={({isActive}): React.CSSProperties | undefined => isActive ? activeStyles : undefined}
                    >Photos</NavLink>
                </nav>
            </header>
            <Outlet context={hostedVanDetail}/>
        </section>
        ) : <h2>Loading...</h2>

    return(
        selectedVanDetail
    )
}
import {useOutletContext} from "react-router-dom";
import type {HostedVan} from "./HostVanDetail.tsx";
import type {JSX} from "react";

export default function HostVanInfo():JSX.Element {

    const hostedVanDetails : HostedVan | null = useOutletContext()

    return (
        <div>
            <section className="host-van-detail-info">
                <h4>Name: <span>{hostedVanDetails?.name}</span></h4>
                <h4>Category: <span>{hostedVanDetails?.type}</span></h4>
                <h4>Description: <span>{hostedVanDetails?.description}</span></h4>
                <h4>Visibility: <span>Public</span></h4>
            </section>
        </div>
    )
}
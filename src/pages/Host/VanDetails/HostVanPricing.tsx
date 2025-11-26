import type {HostedVan} from "./HostVanDetail.tsx";
import {useOutletContext} from "react-router-dom";
import type {JSX} from "react";

export default function HostVanPricing():JSX.Element {

    const hostVanDetails : HostedVan | null = useOutletContext()

    return (
        <h3 className="host-van-price">${hostVanDetails?.price}<span>/day</span></h3>
    )
}
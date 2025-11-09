import {useOutletContext} from "react-router-dom";
import type {HostedVan} from "../HostVanDetail.tsx";
import type {JSX} from "react";

export default function HostVanPhotos():JSX.Element{

    const hostVanDetails : HostedVan | null = useOutletContext()

    return (
        <img src={hostVanDetails?.imageUrl} className="host-van-detail-image" alt="vanImage" />
    )
}
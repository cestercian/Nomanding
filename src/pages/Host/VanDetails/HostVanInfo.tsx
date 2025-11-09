import {useOutletContext} from "react-router-dom";
import type {HostedVan} from "../HostVanDetail.tsx";
import type {JSX} from "react";

export default function HostVanInfo():JSX.Element {

    const hostedVanDetails : HostedVan | null = useOutletContext()

    return (
        <div>
            {hostedVanDetails?.name}
            {hostedVanDetails?.type}
        </div>
    )
}
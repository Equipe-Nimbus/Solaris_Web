'use client'
import { APIProvider } from "@vis.gl/react-google-maps"
import { Map } from "@/features/satellite-images/components/map"

export default function ReqMap() {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""

    return (
        <APIProvider apiKey={API_KEY}>
            <Map />
        </APIProvider>
    )
}
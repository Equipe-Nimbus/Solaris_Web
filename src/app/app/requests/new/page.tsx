'use client'

import { APIProvider } from "@vis.gl/react-google-maps"

import { ReqImageHandler } from "@/features/satellite-images/components/req-images-handler"

export default function NewRequestPage() {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""

    return (
        <APIProvider apiKey={API_KEY}>
            <ReqImageHandler />
        </APIProvider>
    )
}
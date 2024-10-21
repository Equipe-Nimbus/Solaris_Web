import { Map as GoogleMap } from "@vis.gl/react-google-maps"

import { Rectangle } from "./rectangle";
import { Info } from "@phosphor-icons/react";

type MapProps = {
    bounds?: { north: number, south: number, east: number, west: number }
}

export function Map({ bounds }: MapProps) {
    const initialCenter = { lat: -15.7801, lng: -48.0292 }
    const initialBounds = bounds || {north: 5.271802, south: -33.751748, east: -34.276938, west: -73.982817}

    return (
        <div className="flex flex-col gap-2">
            {!bounds && (
                <span className="flex gap-2 items-center">
                    <Info size={16} className="text-neutral-300"/>
                    <span className="text-neutral-300 text-small">Selecione uma área no mapa </span>
                </span>
            )}
            <GoogleMap
                style={{ width: '100%', height: 400, borderRadius: '8px', overflow: 'hidden' }}
                defaultCenter={initialCenter}
                defaultZoom={3}
                gestureHandling={'greedy'}
                streetViewControl={false}
                mapTypeId={'hybrid'}
            >
                <Rectangle
                    bounds={initialBounds}
                    draggable
                    editable
                />
            </GoogleMap>
        </div>
    )
}
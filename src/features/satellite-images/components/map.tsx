import { Map as GoogleMap } from "@vis.gl/react-google-maps"

import { Rectangle } from "./rectangle";
import { Info } from "@phosphor-icons/react";

export function Map() {

    return (
        <div className="flex flex-col gap-2">
            <span className="flex gap-2 items-center">
                <Info size={16} className="text-neutral-300"/>
                <span className="text-neutral-300 text-small">Selecione uma área no mapa </span>
            </span>
            <GoogleMap
                style={{ width: '100%', height: 400, borderRadius: '8px', overflow: 'hidden' }}
                defaultCenter={{ lat: -15.7801, lng: -48.0292 }}
                defaultZoom={3}
                gestureHandling={'greedy'}
                streetViewControl={false}
                mapTypeId={'hybrid'}
            >
                <Rectangle
                    bounds={{
                        north: 5.271802,
                        south: -33.751748,
                        east: -34.276938,
                        west: -73.982817
                    }}
                    draggable
                    editable
                />
            </GoogleMap>
        </div>
    )
}
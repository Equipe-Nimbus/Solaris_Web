import { Map as GoogleMap, useMap, } from "@vis.gl/react-google-maps"

import { Rectangle } from "./rectangle";

export function Map() {
    
    return (
        <GoogleMap
            style={{ width: '100%', height: '100vh' }}
            defaultCenter={{ lat: -15.7801, lng: -47.9292 }}
            defaultZoom={4}
            gestureHandling={'greedy'}
            streetViewControl={false}
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
    )
}
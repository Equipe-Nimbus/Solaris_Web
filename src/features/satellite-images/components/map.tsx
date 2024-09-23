import { useEffect } from "react";
import { Map as GoogleMap, useMap, } from "@vis.gl/react-google-maps"
import { useFormContext } from "react-hook-form";

import { Rectangle } from "./rectangle";


export function Map() {
    const map = useMap();

    // const rectangle = useRef(new google.maps.Rectangle()).current;


    const { setValue } = useFormContext();

    useEffect(() => {
        function getMapBounds(map: google.maps.Map) {
            const bounds = map.getBounds();
            if (!bounds) return;

            const SW = bounds?.getSouthWest();
            const NE = bounds?.getNorthEast();

            const bbox = `${SW.lng()},${SW.lat()},${NE.lng()},${NE.lat()}`;
            setValue('bbox', bbox);
        }

        if (map) {
            map.addListener('bounds_changed', () => getMapBounds(map));
        }

    }, [map, setValue]);

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
                onBoundsChanged={(b) => console.log(b)}
            />
        </GoogleMap>
    )
}
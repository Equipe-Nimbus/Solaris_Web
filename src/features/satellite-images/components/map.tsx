import { useEffect } from "react";
import { Map as GoogleMap, useMap } from "@vis.gl/react-google-maps"
import { useFormContext } from "react-hook-form";

export function Map() {
    const map = useMap();
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
        />
    )
}
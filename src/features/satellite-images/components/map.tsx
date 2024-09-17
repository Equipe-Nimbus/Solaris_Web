import { Map as GoogleMap } from "@vis.gl/react-google-maps"

export function Map() {
    return (
        <GoogleMap
            style={{ width: '100vw', height: '100vh' }}
            defaultCenter={{ lat: 22.54992, lng: 0 }}
            defaultZoom={3}
            gestureHandling={'greedy'}
            streetViewControl={false}
        />
    )
}
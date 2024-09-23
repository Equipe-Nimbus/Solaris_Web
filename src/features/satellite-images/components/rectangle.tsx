import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef
} from 'react';

import type { Ref } from 'react';
import { useMap } from '@vis.gl/react-google-maps';

type RectangleEventProps = {
    onDrag?: (e: google.maps.MapMouseEvent) => void;
    onDragStart?: (e: google.maps.MapMouseEvent) => void;
    onDragEnd?: (e: google.maps.MapMouseEvent) => void;
    onBoundsChanged?: (b: ReturnType<google.maps.Rectangle['getBounds']>) => void;
};

export type RectangleProps = google.maps.RectangleOptions & RectangleEventProps;

export type RectangleRef = Ref<google.maps.Rectangle | null>;

function useRectangle(props: RectangleProps) {
    const {
        bounds,
        ...rectangleOptions
    } = props;

    const rectangle = useRef<google.maps.Rectangle | null>(null);

    useEffect(() => {
        if (!rectangle.current) {
            rectangle.current = new google.maps.Rectangle();
        }

        if (rectangle.current) {
            rectangle.current.setOptions(rectangleOptions);
        }
    }, [rectangleOptions]);

    useEffect(() => {
        if (rectangle.current && bounds) {
            rectangle.current.setBounds(bounds);
        }
    }, [bounds]);

    const map = useMap();

    useEffect(() => {
        if (!map) {
            console.error('<Rectangle> has to be inside a Map component.');
            return;
        }

        if (rectangle.current) {
            rectangle.current.setMap(map);
        }

        return () => {
            if (rectangle.current) {
                rectangle.current.setMap(null);
            }
        };
    }, [map]);

    return rectangle;
}

export default useRectangle;

export const Rectangle = forwardRef((props: RectangleProps, ref: RectangleRef) => {
    const rectangle = useRectangle(props);

    useImperativeHandle(ref, () => rectangle.current);

    return null;
});
Rectangle.displayName = 'Rectangle';
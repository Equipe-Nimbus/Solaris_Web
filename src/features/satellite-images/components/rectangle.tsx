import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef
} from 'react';

import type { Ref } from 'react';
import { useMap } from '@vis.gl/react-google-maps';
import { useFormContext } from 'react-hook-form';


export type RectangleProps = google.maps.RectangleOptions
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

export const Rectangle = forwardRef((props: RectangleProps, ref: RectangleRef) => {
    const rectangle = useRectangle(props);
    const formContext = useFormContext();
    const setValue = formContext?.setValue;

    useImperativeHandle(ref, () => rectangle.current);

    useEffect(() => {
        function getRectangleBounds(rectangle: google.maps.Rectangle) {
            const bounds = rectangle.getBounds();
            if (!bounds) return;

            const SW = bounds.getSouthWest();
            const NE = bounds.getNorthEast();

            const bbox = `${SW.lng()},${SW.lat()},${NE.lng()},${NE.lat()}`;
            if (setValue) {
                setValue("bbox", bbox);
            }
        }

        if (rectangle.current) {
            rectangle.current.addListener('bounds_changed', () => getRectangleBounds(rectangle.current!));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rectangle.current, setValue]);

    return null;
});
Rectangle.displayName = 'Rectangle';
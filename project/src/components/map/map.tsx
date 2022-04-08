import { useEffect, useRef, MutableRefObject } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { useAppSelector } from '../../hooks';
import { Point } from '../../types';

interface MapProps {
  points: Point[],
  activePoint: Point,
  className: string,
}

function Map({points, activePoint, className}: MapProps) {

  const {city} = useAppSelector((state) => state.tabs);

  const mapRef = useRef(null);
  const layerRef: MutableRefObject<leaflet.Layer | null> = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const defaultCustomIcon = leaflet.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [27, 39],
      iconAnchor: [23, 40],
    });

    const currentCustomIcon = leaflet.icon({
      iconUrl: 'img/pin-active.svg',
      iconSize: [27, 40],
      iconAnchor: [23, 40],
    });

    if (map === null) {
      return;
    }

    if (layerRef.current !== null) {
      map.removeLayer(layerRef.current);
    }

    map.setView({
      lat: city.lat,
      lng: city.lng,
    });

    const markerLayer = leaflet.layerGroup();

    if(className === 'property__map map') {
      points.push(activePoint);
    }

    points.forEach((point) => {
      markerLayer.addLayer(
        leaflet.marker({
          lat: point.lat,
          lng: point.lng,
        },
        {
          icon: (point.lat === activePoint?.lat && point.lng === activePoint?.lng)
            ?
            currentCustomIcon
            :
            defaultCustomIcon,
        },
        ),
      );
    });

    markerLayer.addTo(map);
    layerRef.current = markerLayer;
  }, [map, layerRef, points, city, activePoint]);

  return (
    <section
      ref={mapRef}
      className={className}
    >
    </section>
  );
}

export default Map;

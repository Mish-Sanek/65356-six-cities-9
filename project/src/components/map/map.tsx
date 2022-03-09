import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { CardPoints, PointType } from '../../types';
import { useAppSelector } from '../../hooks';

interface MapProps {
  points: PointType[],
  hoveredCardPoints? : CardPoints
}

function Map({points, hoveredCardPoints}: MapProps) {

  const {city} = useAppSelector((state) => state);

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

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

  useEffect(() => {
    if (map === null) {
      return;
    }

    map.setView({
      lat: city.lat,
      lng: city.lng,
    });

    points.forEach((point) => leaflet
      .marker({
        lat: point.lat,
        lng: point.lng,
      },
      {
        icon: (point.lat === hoveredCardPoints?.lat && point.lng === hoveredCardPoints?.lng)
          ?
          currentCustomIcon
          :
          defaultCustomIcon,
      })
      .addTo(map),
    );
  }, [map, points, city, hoveredCardPoints]);

  return (
    <section
      ref={mapRef}
      className="cities__map map"
    >
    </section>
  );
}

export default Map;

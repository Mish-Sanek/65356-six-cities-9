import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { PointType } from '../../types';
import { useAppSelector } from '../../hooks';

interface MapProps {
  points: PointType[],
}

function Map({points}: MapProps) {

  const {city} = useAppSelector((state) => state);

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  /* const currentCustomIcon = leaflet.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  }); */

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
        icon: defaultCustomIcon,
      })
      .addTo(map),
    );
  }, [map, points, city]);

  return (
    <section
      ref={mapRef}
      className="cities__map map"
    >
    </section>
  );
}

export default Map;

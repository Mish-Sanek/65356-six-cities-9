/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';

interface MapProps {
  activeTab: any,
  points: object[],
}

function Map({activeTab, points}: MapProps) {

  const mapRef = useRef(null);
  const map = useMap(mapRef, activeTab);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.map((point: any) => leaflet
        .marker({
          lat: point.lat,
          lng: point.lng,
        }, {
          icon: (point.title === activeTab)
            ? currentCustomIcon
            : defaultCustomIcon,
        })
        .addTo(map),
      );
      leaflet.latLng([activeTab.lat, activeTab.lng]);
      // eslint-disable-next-line no-console
      console.log(leaflet.latLng([activeTab.lat, activeTab.lng]));
    }
  }, [map, points, activeTab]);

  return (
    <section
      ref={mapRef}
      className="cities__map"
    >
    </section>
  );
}

export default Map;

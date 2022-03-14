import { MutableRefObject, useEffect, useState } from 'react';
import leaflet, { Map } from 'leaflet';
import { PointType } from '../types';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: PointType,
): Map | null {
  const [map, setMap] = useState<leaflet.Map | null>(null);

  useEffect(() => {
    if (mapRef.current === null) {
      return;
    }
    const instance = leaflet.map(mapRef.current, {
      center: {
        lat: city.lat,
        lng: city.lng,
      },
      zoom: 13,
    });

    leaflet
      .tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      )
      .addTo(instance);
    setMap(instance);

  }, [mapRef]);

  return map;
}

export default useMap;

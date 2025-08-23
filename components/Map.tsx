'use client';
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  useJsApiLoader,
  Marker,
} from '@react-google-maps/api';
import { useSiteContext } from '../context/SiteContext';
import { useState } from 'react';
import classes from './Map.module.scss';
import Loader from './Loader';

const containerStyle = {
  width: '100%',
  height: '660px',
};

const center = {
  lat: 37.93722790686488,
  lng: 23.763348726809543,
};

const mapStyles = [
  {
    featureType: 'administrative.locality',
    elementType: 'all',
    stylers: [
      { hue: '#0049ff' },
      { saturation: 7 },
      { lightness: 19 },
      { visibility: 'on' },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      { hue: '#ff0000' },
      { saturation: -100 },
      { lightness: 100 },
      { visibility: 'simplified' },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      { hue: '#ff0000' },
      { saturation: -100 },
      { lightness: 100 },
      { visibility: 'off' },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      { hue: '#008eff' },
      { saturation: -93 },
      { lightness: 31 },
      { visibility: 'simplified' },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      { hue: '#008eff' },
      { saturation: -93 },
      { lightness: 31 },
      { visibility: 'on' },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels',
    stylers: [
      { hue: '#bbc0c4' },
      { saturation: -93 },
      { lightness: -2 },
      { visibility: 'simplified' },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      { hue: '#007fff' },
      { saturation: -90 },
      { lightness: -8 },
      { visibility: 'simplified' },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [
      { hue: '#007fff' },
      { saturation: 10 },
      { lightness: 69 },
      { visibility: 'on' },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [{ visibility: 'on' }, { color: '#bfd4e7' }, { lightness: 30 }],
  },
];

export default function Map() {
  const { logo, footer } = useSiteContext();
  const [infoOpen, setInfoOpen] = useState(false);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDU6Mi5ypMyiA20j4aQ0ELbLxYGQ-m96R8',
  });

  if (!isLoaded) {
    return (
      <div className="custom-padding-top custom-padding-bottom min-h-[400px] md:min-h-[660px] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerClassName={classes.map}
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
      options={{ styles: mapStyles }}
    >
      <Marker
        onClick={() => setInfoOpen(true)}
        icon={{
          url: logo.url,
          scaledSize: { width: 84, height: 100 } as google.maps.Size,
        }}
        onLoad={(marker) => {
          marker.setAnimation(window.google.maps.Animation.DROP);
        }}
        position={center}
      />
      {infoOpen && (
        <InfoWindow
          position={center}
          onCloseClick={() => setInfoOpen(false)}
          options={{
            maxWidth: 300,
            pixelOffset: { width: 0, height: -105 } as google.maps.Size,
          }}
        >
          <p className="font-medium text-sm">{footer.address}</p>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

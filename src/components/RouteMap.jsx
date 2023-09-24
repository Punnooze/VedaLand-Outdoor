import React, { useState, useEffect } from 'react';
import Select from 'react-select';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function RouteMap(props) {
  const [map, setMap] = useState(null);
  const [directions, setDirections] = useState(null);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);

  const data = props.data || {};
  const mode = props.mode || {};
  const colour = props.colour || {};
  const [src, setSrc] = useState([data[0][0], data[0][1]]);
  const [dest, setDest] = useState([data[1][0], data[1][1]]);
  const [md, setMd] = useState(mode);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [currentLoc, setCurrentLoc] = useState([null, null]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    setCurrentLoc([lat, long]);
  }, [lat, long]);

  const coords = [
    [8.561086488298699, 76.87725789136118],
    [8.558800783810975, 76.87785894039044],
    [8.56010062670254, 76.87972613196062],
    [8.556818423234798, 76.88206353805008],
    [8.557242947851528, 76.88025438037813],
  ];

  const desti = [
    { value: coords[0], label: 'M square' },
    { value: coords[1], label: 'Gayathri' },
    { value: coords[2], label: 'Nila' },
    { value: coords[3], label: 'Thejaswani' },
    { value: coords[4], label: 'Pamba' },
  ];

  const srce = [
    { value: currentLoc, label: 'Current Location' },
    { value: coords[0], label: 'M square' },
    { value: coords[1], label: 'Gayathri' },
    { value: coords[2], label: 'Nila' },
    { value: coords[3], label: 'Thejaswani' },
    { value: coords[4], label: 'Pamba' },
  ];

  const mds = [
    { value: 'WALKING', label: 'Walking' },
    { value: 'DRIVING', label: 'Driving' },
  ];

  const googleMapsApiKey = 'AIzaSyC8ftL0zHu5ro8tnSWMN5dXjX3SYRREjqE';

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap`;
      script.defer = true;
      script.async = true;

      script.addEventListener('load', () => {
        initMap();
      });

      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    } else {
      initMap();
    }
  }, [src, dest, md]);

  function initMap() {
    const source = new window.google.maps.LatLng(src[0], src[1]);
    const destination = new window.google.maps.LatLng(dest[0], dest[1]);

    const mapOptions = {
      zoom: 10,
      center: source,
    };
    const map = new window.google.maps.Map(
      document.getElementById('map'),
      mapOptions
    );
    setMap(map);

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: source,
        destination: destination,
        travelMode: md,
      },
      (result, status) => {
        if (status === 'OK') {
          setDirections(result);
          const distanceText = result.routes[0].legs[0].distance.text;
          const durationText = result.routes[0].legs[0].duration.text;
          setDistance(distanceText);
          setDuration(durationText);

          const directionsRenderer = new window.google.maps.DirectionsRenderer({
            map: map,
            directions: result,
          });
        } else {
          console.error('Directions request failed:', status);
        }
      }
    );
  }

  return (
    <>
      <div
        className={` w-[100%] h-[20vh] ${
          colour === 'light' ? 'bg-light3' : 'bg-dark3'
        } p-[10px]  border-[4px]  ${
          colour === 'light' ? 'border-light3' : 'border-dark3'
        } rounded-md shadow-md hover:shadow-lg transition duration-300 grid grid-cols-9 sm:grid-cols-7 items-center gap-[10px]`}
      >
        <Select
          className="md:col-span-2 md:row-start-1 sm:col-span-4 col-span-5 hover:shadow-sm transition duration-100"
          options={srce}
          placeholder={data[2]}
          onChange={(selected) => setSrc(selected.value)}
          theme={(theme) => ({
            ...theme,
            borderRadius: '5px',
            colors: {
              ...theme.colors,
              primary25: colour === 'light' ? '#F8EAD8' : '#d2d3db',
              primary: colour === 'light' ? '#C8B6A6' : '#9394a5',
              primary50: colour === 'light' ? '#A4907C' : '#484b6a',
            },
          })}
        />
        <div className="collapse md:visible flex justify-center col-start-3 align-middle items-center">
          <FontAwesomeIcon
            className={`${
              colour === 'light' ? 'text-light6' : 'text-dark6'
            } text-[22px]`}
            icon={faArrowRight}
          />
        </div>

        <Select
          className="md:col-span-2 col-span-5 sm:col-span-4 row-start-2 md:col-start-4 md:row-start-1 hover:shadow-sm transition duration-100"
          options={desti}
          placeholder={data[3]}
          onChange={(selected) => setDest(selected.value)}
          theme={(theme) => ({
            ...theme,
            borderRadius: '5px',
            colors: {
              ...theme.colors,
              primary25: colour === 'light' ? '#F8EAD8' : '#d2d3db',
              primary: colour === 'light' ? '#C8B6A6' : '#9394a5',
              primary50: colour === 'light' ? '#A4907C' : '#484b6a',
            },
          })}
        />

        <Select
          className="sm:col-start-5 col-start-6 col-span-4 sm:col-span-2  md:col-start-6 md:col-span-2 lg:col-span-1 lg:col-start-6 row-start-1 hover:shadow-sm transition duration-100"
          options={mds}
          placeholder={data[4]}
          onChange={(selected) => setMd(selected.value)}
          theme={(theme) => ({
            ...theme,
            borderRadius: '5px',
            colors: {
              ...theme.colors,
              primary25: colour === 'light' ? '#F8EAD8' : '#d2d3db',
              primary: colour === 'light' ? '#C8B6A6' : '#9394a5',
              primary50: colour === 'light' ? '#A4907C' : '#484b6a',
            },
          })}
        />
      </div>

      <div className="h-[10vh] pt-[15px] pb-[15px]">
        <div className="flex justify-between md:justify-around ">
          <p
            className={`${
              colour === 'light' ? 'bg-light3' : 'bg-dark3'
            } rounded-[5px] border-[2px] ${
              colour === 'light' ? 'border-light6' : 'border-dark6'
            }  p-[5px] ${
              colour === 'light' ? 'text-light6' : 'text-dark6'
            } font-medium shadow-sm hover:shadow-md duration-300 `}
          >
            Estimated time :
            <span
              className={`${
                colour === 'light' ? 'text-light5' : 'text-dark5'
              } font-medium`}
            >
              {' '}
              {duration}
            </span>
          </p>
          <p
            className={`${
              colour === 'light' ? 'bg-light3' : 'bg-dark3'
            } border-[2px] ${
              colour === 'light' ? 'border-light6' : 'border-dark6'
            } rounded-[5px] p-[5px] ${
              colour === 'light' ? 'text-light6' : 'text-dark6'
            } font-medium shadow-sm hover:shadow-sm duration-300`}
          >
            Distance :
            <span
              className={`${
                colour === 'light' ? 'text-light5' : 'text-dark5'
              } font-medium`}
            >
              {' '}
              {distance}
            </span>
          </p>
        </div>
      </div>

      <div className="w-[100%] h-[68vh]">
        <div
          id="map"
          className={`w-[100%] h-[90%] border-[4px] ${
            colour === 'light' ? 'border-light3' : 'border-dark3'
          } rounded-[10px] shadow-md hover:shadow-lg transition duration-300`}
        ></div>
      </div>
    </>
  );
}

export default RouteMap;

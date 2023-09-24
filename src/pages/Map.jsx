import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import logoBlue from '../assets/logoBlue.svg';
import logoBrown from '../assets/logoBrown.svg';
import RouteMap from '../components/RouteMap';

const GOOGLE_MAP_API_KEY = 'AIzaSyC8ftL0zHu5ro8tnSWMN5dXjX3SYRREjqE';

function Map() {
  const [loadMap, setLoadMap] = useState(false);
  const [data, setData] = useState(null);
  const [colour, setColour] = useState('light');

  const location = useLocation();
  const dta = location.state;

  useEffect(() => {
    if (dta) {
      setData(dta);
      setColour(dta[2]);
    }
  }, [dta]);

  useEffect(() => {
    const options = {
      apiKey: GOOGLE_MAP_API_KEY,
      version: 'weekly',
      libraries: ['geometry'],
    };

    new Loader(options)
      .load()
      .then(() => {
        setLoadMap(true);
      })
      .catch((e) => {
        console.error(
          'Sorry, something went wrong: Please try again later. Error:',
          e
        );
      });
  }, []);

  return (
    <>
      <div
        className={`${
          colour === 'light' ? 'bg-light2' : 'bg-dark2'
        } h-[100vh] p-[10px] `}
      >
        <div className="h-[80%]">
          {!loadMap ? 
          (
          <div className="w-[100%] h-[100%]">
            <img
              className="w-[100%] h-[100%]"
              src={colour === 'light' ? logoBrown : logoBlue}
              alt=""
            />
          </div>
          ) : (
            <RouteMap data={data[0]} mode={data[1]} colour={colour} travel={data[4]} />
          )}
        </div>
      </div>
    </>
  );
}

export default Map;

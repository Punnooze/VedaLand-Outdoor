import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Input(props) {
  const navigate = useNavigate();
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [currentLoc, setCurrentLoc] = useState([null, null]);
  const [src, setSrc] = useState(null);
  const [dest, setDest] = useState(null);
  const [srclabel, setSrcLabel] = useState(null);
  const [destlabel, setDestLabel] = useState(null);
  const [modelabel, setModeLabel] = useState('Walking');

  const [data, setData] = useState(null);
  const [mode, setMode] = useState('WALKING');

  const colour = props.colour || {};

  const coords = [
    [8.561086488298699, 76.87725789136118],
    [8.558800783810975, 76.87785894039044],
    [8.56010062670254, 76.87972613196062],
    [8.556818423234798, 76.88206353805008],
    [8.557242947851528, 76.88025438037813],
  ];

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    setCurrentLoc([lat, long]);
  }, [lat, long]);

  const destination = [
    { value: coords[0], label: 'M square' },
    { value: coords[1], label: 'Gayathri' },
    { value: coords[2], label: 'Nila' },
    { value: coords[3], label: 'Thejaswani' },
    { value: coords[4], label: 'Pamba' },
  ];

  const source = [
    { value: currentLoc, label: 'Current Location' },
    { value: coords[0], label: 'M square' },
    { value: coords[1], label: 'Gayathri' },
    { value: coords[2], label: 'Nila' },
    { value: coords[3], label: 'Thejaswani' },
    { value: coords[4], label: 'Pamba' },
  ];

  const modes = [
    { value: 'WALKING', label: 'Walking' },
    { value: 'DRIVING', label: 'Driving' },
  ];

  return (
    <>
      <div
        className={`${
          colour === 'light' ? 'bg-light1' : 'bg-dark1'
        } md:h-[68vh] h-[72vh] w-[100vw] flex flex-col items-center justify-center  `}
      >
        <div
          className={`${
            colour === 'light' ? 'bg-light2' : 'bg-dark2'
          } md:w-[80%] w-[90%] h-[64vh] md:h-[58vh] flex flex-col items-center align-middle justify-around rounded-md p-[15px] shadow-sm`}
        >
          <p
            className={`text-[20px] ${
              colour === 'light' ? 'text-light5' : 'text-dark5'
            } h-[8vh] `}
          >
            Choose source and Destination!
          </p>

          <div
            className={` h-[38vh] md:h-[30vh] w-[100%] 
          grid grid-flow-row grid-cols-3 md:grid-cols-10 md:gap-[15px] rounded-md pl-[25px] pr-[25px] pt-[30px] md:pt-0 ${
            colour === 'light' ? 'bg-light3' : 'bg-dark3'
          }  shadow-md hover:shadow-lg ease-in-out transition duration-300 `}
          >
            <div
              className={` flex flex-col align-middle  justify-center col-span-3`}
            >
              <label
                className={`${
                  colour === 'light' ? 'text-light5' : 'text-dark5'
                }  text-[12px] font-medium `}
              >
                To
              </label>
              <Select
                className={`hover:shadow-sm transition duration-200`}
                options={source}
                placeholder="Current Location"
                onChange={(selected) => {
                  setSrc(selected.value);
                  setSrcLabel(selected.label);
                }}
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

            <div
              className={`collapse md:visible  ${
                colour === 'light' ? 'text-light5' : 'text-dark5'
              } justify-center md:col-start-4 flex items-center`}
            >
              <FontAwesomeIcon className=" text-[22px]" icon={faArrowRight} />
            </div>

            <div
              className={` flex flex-col align-middle justify-center md:col-start-5 col-span-3 row-start-2 md:row-start-1 `}
            >
              <label
                className={`${
                  colour === 'light' ? 'text-light5' : 'text-dark5'
                } text-[12px] font-medium `}
              >
                From
              </label>
              <Select
                className="hover:shadow-sm transition duration-200"
                options={destination}
                placeholder="Destination"
                onChange={(selected) => {
                  setDest(selected.value);
                  setDestLabel(selected.label);
                }}
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
            <div
              className={`flex flex-col align-middle justify-center md:col-start-8 lg:col-start-9 lg:col-span-2   col-span-3 row-start-3 md:row-start-1 `}
            >
              <label
                className={`${
                  colour === 'light' ? 'text-light5' : 'text-dark5'
                } text-[12px] font-medium `}
              >
                Travel Mode
              </label>
              <Select
                className="hover:shadow-sm transition duration-200"
                label="Mode"
                options={modes}
                placeholder="Walking"
                onChange={(selected) => {
                  setModeLabel(selected.label);
                  setMode(selected.value);
                  console.log(selected.label, modelabel, selected.value, mode);
                }}
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
          </div>
          <div
            className={`h-[10vh] p-[10px] flex flex-col justify-center items-center`}
          >
            {src && dest ? (
              <button
                className={` rounded-md  align-middle justify-center p-[7px] border-[2px] ease-in-out duration-300 ${
                  colour === 'light' ? 'hover:bg-light6' : 'hover:bg-dark6'
                } ${
                  colour === 'light' ? 'hover:text-light1' : 'hover:text-dark1'
                } ${colour === 'light' ? 'text-light6' : 'text-dark6'} font-medium `}
                onMouseEnter={() =>
                  setData([src, dest, srclabel, destlabel, modelabel])
                }
                onClick={() => {
                  if (data) {
                    const prop = [data, mode, colour, modelabel];
                    console.log(prop);
                    navigate('/maps', { state: prop });
                  }
                }}
              >
                Directions
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Input;

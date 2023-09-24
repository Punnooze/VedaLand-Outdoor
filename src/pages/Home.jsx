import { useEffect, useState} from 'react';
import fullBlue from '../assets/fullBlue.svg';
import logoBlue from '../assets/logoBlue.svg';
import fullBrown from '../assets/fullBrown.svg';
import logoBrown from '../assets/logoBrown.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Input from '../components/Input';
import Footer from '../components/Footer';

function Home() {
  const [hamselected, setHamSelected] = useState(false);
  const [theme, setTheme] = useState(true);
  const [colour, setColour] = useState(null);

  useEffect(() => {
    theme ? setColour('light') : setColour('dark');
    console.log(theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('colour', JSON.stringify(colour));
  }, [colour]);

  return (
    <>
      <div className={`sticky inset-x-0 top-0 w-[100vw] z-40`}>
        <div
          className={`sticky inset-x-0 top-0 p-[10px] flex justify-between align-middle h-[12vh] pl-[50px] pr-[20px] bg-${colour}2 shadow-md`}
        >
          <img src={theme ? logoBrown : logoBlue} alt="Logo" />
          <img
            className={`hidden md:block`}
            src={theme ? fullBrown : fullBlue}
            alt="logo"
          />

          <div className={`flex justify-between align-middle w-[100px]`}>
            <button
              className={`text-${colour}5 text-[22px]`}
              onClick={() => setTheme(!theme)}
            >
              {theme ? (
                <FontAwesomeIcon icon={faSun} />
              ) : (
                <FontAwesomeIcon icon={faMoon} />
              )}
            </button>

            <button
              className={` text-${colour}5 text-[22px]`}
              onClick={() => setHamSelected(!hamselected)}
            >
              {hamselected ? (
                <FontAwesomeIcon icon={faX} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>
        </div>
      </div>
      <Input colour={colour} />
      <Footer colour={colour} />
    </>
  );
}

export default Home;

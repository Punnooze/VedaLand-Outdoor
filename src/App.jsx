import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Map from './pages/Map';
import './App.css';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maps" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// import { useState, useEffect } from 'react';
// import { Loader } from '@googlemaps/js-api-loader';
// import GMap from '../src/components/GMap.jsx';

// // API key of the google map
// const GOOGLE_MAP_API_KEY = 'AIzaSyC8ftL0zHu5ro8tnSWMN5dXjX3SYRREjqE';

// const App = () => {
//   const [loadMap, setLoadMap] = useState(false);

//   useEffect(() => {
//     const options = {
//       apiKey: GOOGLE_MAP_API_KEY,
//       version: 'weekly',
//       libraries: ['geometry'],
//     };

//     new Loader(options)
//       .load()
//       .then(() => {
//         setLoadMap(true);
//       })
//       .catch((e) => {
//         console.error(
//           'Sorry, something went wrong: Please try again later. Error:',
//           e
//         );
//       });
//   }, []);

//   return (
//     <div className="App">
//       <h4>
//         Draw a route between two points using Google Maps API in React -{' '}
//         <a href="https://www.cluemediator.com">Clue Mediator</a>
//       </h4>
//       {!loadMap ? <div>Loading...</div> : <GMap />}
//       <br />
//       <small>
//         <b>Note:</b> In order to make it work, you have to set the
//         YOUR_GOOGLE_MAP_API_KEY in App.js file.{' '}
//       </small>
//     </div>
//   );
// };

// export default App;

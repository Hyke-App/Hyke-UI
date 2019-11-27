import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { LocationProvider } from './LocationProvider';
import { Map } from './MapComponent';
import { TrailSearch } from './TrailSearch';
import Box from '@material-ui/core/Box';

function App() {
  return ( 
    <Box> 
      <LocationProvider>
        <Map/> 
        <TrailSearch/>
      </LocationProvider>
    </Box> 
  );
}

export default App;

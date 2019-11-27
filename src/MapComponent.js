import React, { Component } from 'react';
import ReactMapGL, { GeolocateControl }  from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css"; 
import { LocContext } from './LocationProvider';
 
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

export const Map = () => { 
    const context = React.useContext(LocContext);
    return (
        <div>
            <ReactMapGL
                { ...context.state.viewport }
                mapboxApiAccessToken={MAPBOX_TOKEN}
                onViewportChange={(value) => {context.updateViewport(value)}}> 
                <GeolocateControl
                    positionOptions={{ enableHighAccuracy: false }}
                    trackUserLocation={true}
                    showUserLocation={true}
                    onViewportChange={
                        (value) => { 
                            value.zoom = context.state.viewport.zoom
                            context.updateViewport(value) 
                        }
                    }/> 
            </ReactMapGL>
        </div>
    );
}
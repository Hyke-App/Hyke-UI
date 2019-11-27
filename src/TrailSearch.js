import React, { Component } from 'react';
import { LocContext } from './LocationProvider';
import axios from 'axios';
import { SearchOptions } from './SearchOptions';

const REI_API_TOKEN = "";
const REI_API_ENDPOINT = "https://www.hikingproject.com/data/";
const distanceOptions = [{text: "10mi", value: 10}, {text: "25mi", value: 25}]

export const TrailSearch = () => {
    const context = React.useContext(LocContext);

    const getTrails = (value) => {
        axios.post(
            REI_API_ENDPOINT + "get-trails",
             value)
            .then((response) => {
                console.log(response)
            });
    }
    return ( 
        <div>
            <SearchOptions {...{title: "Distance", options: distanceOptions}}/>
        </div>
    ); 
}
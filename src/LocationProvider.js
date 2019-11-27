import React, { Component } from 'react';

export const LocContext = React.createContext()

export class LocationProvider extends Component { 
    constructor() {
        super()
        this.state = {
            viewport: {
                latitude: 37.785164,
                longitude: -100,
                zoom: 6,
                bearing: 0,
                pitch: 0,
                width: 500,
                height: 500,
            }
        }; 
    }

    updateViewport = (value) => {
        console.log("in updateViewport")
        console.log(this.state.viewport.zoom)
        this.setState({viewport: value})
    }
     

    render() {
        return (
            <LocContext.Provider value={ 
                { 
                    state: this.state, 
                    updateViewport: this.updateViewport
                } 
            }>
                {this.props.children} 
            </LocContext.Provider>
        )
    }
}
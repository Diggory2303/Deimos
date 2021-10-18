import React from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

console.log(process.env.REACT_APP_GOOGLE_KEY);

export const Maps = () => {
    const defaultProps = {
        center: {
          lat: 19.424167,
          lng: -99.175556
        },
        zoom: 17
    };

    return (
        
       // Important! Always set the container height explicitly
       <div style={{ height: '40vh', width: '98%' }}>
       <GoogleMapReact
         bootstrapURLKeys={{ key: "`${process.env.REACT_APP_GOOGLE_KEY}`" }}
         defaultCenter={defaultProps.center}
         defaultZoom={defaultProps.zoom}
       >
         <AnyReactComponent
           lat={19.424167}
           lng={-99.175556}
           //text="Av. Paseo de la Reforma 505"
         />
         
       </GoogleMapReact>
     </div>
 
    );
}


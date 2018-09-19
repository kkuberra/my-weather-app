import React from 'react';

const Weather = props => (
    <div>
        {props.city && props.country && <p>location:  {props.city}, {props.country}</p>}
        {props.temperature && <p>temperature: {props.temperature}</p>}
        {props.humidity && <p> Humidity: {props.hunidity}</p>}
        {props.description && <p>Conditions: {props.description}</p>}
        {props.error && <p>{props.error}</p>}
    </div>
)
   
export default Weather;
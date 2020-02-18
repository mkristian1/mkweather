import React from 'react';
import './weather-view.css';

const WeatherView = ({ city, country, temp, iconUrl }) => {
    return (
        <div className="weather-view">
            <span>
                {city}, {country}
                <span>
                    <img src={iconUrl} alt={city} />  {temp}&#176;
            </span>
            </span>
        </div>
    );
};

export default WeatherView;
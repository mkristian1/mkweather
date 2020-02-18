import React from 'react';
import WeatherView from '../weather-view/weather-view';
import EasterEgg from '../easterEgg';
import Loader from '../loader';
import Errors from '../errors';

const WeatherData = ({ city, country, name, temp, icon, loader, errors }) => {

    const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
    const isErrors = errors ? <Errors /> : null;

    return (

        <div className="weather-data">
            {name ? <EasterEgg name={name} /> : null}
            {isErrors}
            {loader ? <Loader /> : null}
            {!errors && !name ?
                <WeatherView
                    city={city}
                    country={country}
                    temp={temp}
                    iconUrl={iconUrl}
                />
                : null}
        </div>
    );

};

export default WeatherData;



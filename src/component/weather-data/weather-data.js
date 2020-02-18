import React from 'react';
import WeatherView from '../weather-view/weather-view';
import Loader from '../loader';
import Errors from '../errors';

const WeatherData = ({ city, country, temp, icon, loader, errors }) => {

    const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
    const isErrors = errors ? <Errors /> : null;


    return (

        <div className="weather-data">
            {isErrors}
            {loader ? <Loader /> : null}
            {!errors ?
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



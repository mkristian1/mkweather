import React, { Component } from 'react';
import Errors from '../errors';
import './weather.css';

export default class Weather extends Component {

    state = {
        label: ''
    }

    onChangeCity = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.getCity(this.state.label);
    }


    render() {
        const { city, temp, icon, errors } = this.props;
        
        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
        const isErrors = errors ? <Errors /> : null;
        const cityName = !errors ? city : null; 
        const tempData = !errors ? temp : null; 

        return (
            <div className="weather text-center mt-3">
                <h1>MK Weather <i className="fa fa-cloud"></i></h1>
                <div className="form__group field">
                    <form className="d-flex" onSubmit={this.onSubmit}>
                    <input required="" onChange={this.onChangeCity} type="input" className="form__field" />
                    <label className="form__label">
                        <i className="fas fa-map-marker-alt"></i> Enter a city name
                </label>
                    <button type="submit"  className="btn btn-outline-light ml-2">
                        <i className="fas fa-arrow-circle-right"></i>
                    </button>
                    </form>
                </div>
                {isErrors}
                <h2>City: {cityName}</h2>
                <h2>Temp: {tempData}&#176;</h2>
                <p><img src={iconUrl} alt={cityName} /></p>
            </div>
        );
    };
};


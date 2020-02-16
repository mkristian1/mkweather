import React, { Component } from 'react';
import WeatherData from './services/open-weather';
import Weather from './component/weather';
import './app.css';


export default class WeatherApp extends Component {

  //console.log(Math.floor(res.main.temp - 273.15));
  //weatherBase().then(temp => console.log(temp.main.temp));

  weatherData = new WeatherData();

  state = {
    city: 'Dilijan',
    country: null,
    temp: null,
    icon: null,
    loader: true,
    errors: false
  }
  componentDidMount() {
    this.updateData();
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.city !== prevState.city) {
      this.updateData();
    }
  }

  updateData = () => {
    this.weatherData.getData(this.state.city).then(data => {
      const temp = Math.floor(data.main.temp - 273.15);
      const icon = data.weather[0].icon;
      const country = data.sys.country;

      this.setState({
        temp,
        country,
        icon
      });
    }).catch(() => this.setState({ errors: true })
    );
  }

  getCity = (city) => {
    const capFirstCity = city.charAt(0).toUpperCase() + city.slice(1);
    this.setState({
      city: capFirstCity,
      errors: false
    })
  };

  render() {

    const { city, country, temp, icon, errors } = this.state;

    return (
      <div className="weather-app">
        <Weather
          getCity={this.getCity}
          city={city}
          country={country}
          icon={icon}
          temp={temp}
          errors={errors} />
      </div>
    );
  };
};



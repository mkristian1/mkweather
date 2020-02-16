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
      this.setState({
        temp,
        icon
      });
    }).catch(() => this.setState({ errors: true })
    );
  }

  getCity = (city) => {
    this.setState({
      city,
      errors: false
    })
  };

  render() {

    const { city, temp, icon, errors } = this.state;

    return (
      <div className="weather-app">
        <Weather
          getCity={this.getCity}
          city={city}
          icon={icon}
          temp={temp}
          errors={errors} />
      </div>
    );
  };
};



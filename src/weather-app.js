import React, { Component } from 'react';
import OpenWeather from './services/open-weather';
import Header from './component/header';
import Form from './component/form';
import WeatherData from './component/weather-data';
import './app.css';


export default class WeatherApp extends Component {

  //console.log(Math.floor(res.main.temp - 273.15));
  //weatherBase().then(temp => console.log(temp.main.temp));

  openWeather = new OpenWeather();

  state = {
    city: 'Dilijan',
    country: null,
    temp: null,
    icon: null,
    loader: true,
    errors: false,
    name: ''
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
    this.openWeather.getData(this.state.city).then(data => {
      const temp = Math.floor(data.main.temp - 273.15);
      const icon = data.weather[0].icon;
      const country = data.sys.country;

      this.setState({
        temp,
        country,
        icon,
        loader: false
      });
    }).catch(() => this.setState({ errors: true })
    );
  }

  getCity = (city) => {
    const capFirstCity = city.charAt(0).toUpperCase() + city.slice(1);
    this.setState({
      city: capFirstCity,
      errors: false,
      name: ''
    })
  };

  easterEgg = (name) => {
    this.setState({
      name
    })
  }

  render() {

    const { city, country, name, temp, icon, loader, errors } = this.state;
    
    return (
      <div className="weather-app">
        <div className="weather text-center mt-3">
          <Header />
          <Form getCity={this.getCity} easterEgg={this.easterEgg} city={city} />
          <WeatherData
            city={city}
            name={name}
            country={country}
            icon={icon}
            temp={temp}
            loader={loader}
            errors={errors} />
        </div>
      </div>
    );
  };
};



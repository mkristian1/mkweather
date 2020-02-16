export default class WeatherData {

    // Example request api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
    _apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
    _apiKeys = '472cb375aff24a2ab05e75adfa2983e3';
    cityName = 'Dilijan';


    getData = async (city) => {
        const data = await fetch(`${this._apiUrl}${city}&appid=${this._apiKeys}`);
        const res = await data.json();
        return res;
    }
}



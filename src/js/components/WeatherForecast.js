import {kelvinToCelsius} from '@/js/helpers/temperatureConversion';
import { resolve } from 'path';

export default class weatherForecast {
    constructor(element, inputs, view) {
        this.weatherApiKey = '9b4b3411be3ae003bb8da1af64f18a87';
        this.currentWeather = document.querySelector(element);
        this.currentWeatherInputs = inputs;
        this.countryInputs = inputs.country;
        this.cityInputs = inputs.city;
        this.weatherResults = document.querySelector(view);
        this.defaultCity = 'London';

        this.init();
    }

    init() {
        this.setEventListeners(this.currentWeatherInputs);
        this.setCountrySelectOptions(this.countryInputs);
        this.getWeatherForCity(this.defaultCity);
    }

    buildWeatherApiAddress(baseUrl, endpoint, query, credentials) {
        return `${baseUrl}${endpoint}?q=${query}&APPID=${credentials}`;
    }

    getWeatherForCity(city) {
        let apiAddress = this.buildWeatherApiAddress('https://api.openweathermap.org/data/2.5/', 'weather', city, this.weatherApiKey);

        fetch(apiAddress)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    this.promptUser();
                    return Promise.reject('No Weather data available for this city');
                }
            })
            .then(data => {
                this.returnResultsView(data);
            })
            .catch(error => console.warn(error));
    }

    setCountrySelectOptions(selectClasses) {

        fetch('https://restcountries.eu/rest/v2/all?fields=name;capital;')
            .then(response => {
                return response.json();
            })
            .then(data => {
                selectClasses.forEach(element => {
                    data.forEach(country => {
                        this.createNewSelectOption(element, country.name, country.capital);
                    });
                });
            })
            .catch(error => console.warn(error));
    }

    createNewSelectOption(parent, text, value) {
        let elementNode = document.querySelector(parent);
        let option = document.createElement('option');
        option.text = text;
        option.value = value;
        elementNode.appendChild(option);
    }

    returnResultsView(data) {
        let title = `<h2>${data.name}</h2>`;
        let icon = `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"`;
        let description = `<p>The current weather is ${data.weather[0].description} with a temperature of ${kelvinToCelsius(data.main.temp)}&deg;C</p>`;
        
        this.weatherResults.innerHTML = `${title}${icon}${description}`;
    }

    checkInput(selector) {
        return selector.value !== null;
    }

    promptUser() {
        this.weatherResults.innerHTML = `<p>Sorry but it appears we can not find the weather for this country</p>`;
    }

    setEventListeners(inputs) {
        // loop through object of selectors
        Object.keys(inputs).forEach(selectorType => {
            inputs[selectorType].forEach(selector => {
                this.currentWeather.querySelector(selector).addEventListener('input', (e) => {
                    // trigger ajax call
                    if (this.checkInput(e.target)) {
                        this.getWeatherForCity(e.target.value);
                    }
                });
            });
        });
    }
}
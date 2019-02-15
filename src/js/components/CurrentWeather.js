import getDataFromApi from '@/js/helpers/getDataFromApi';

export default class CurrentWeather {
    constructor(element, inputs, view) {
        this.currentWeather = document.querySelector(element);
        this.currentWeatherInputs = Array.from(inputs);
        this.currentWeatherView = view;

        this.init();
    }

    init() {
        this.setEventListeners(this.currentWeatherInputs);
    }

    setEventListeners(selectors) {
        selectors.forEach(selector => {

            this.currentWeather.querySelector(selector).addEventListener('input', e => {
                // trigger ajax call
                console.log('keyup');
            });
        });
    }
}


// country adn city api - https://restcountries.eu/#api-endpoints-all - https://restcountries.eu/rest/v2/all

// constants
// const apiKey = '9b4b3411be3ae003bb8da1af64f18a87';
// const weatherApiBaseAddress = 'https://api.openweathermap.org/data/2.5/';
//
//
//
// // build api call from user input
// function buildApiAddressString(baseUrl, apiFunction, apiFunctionParams, credentials) {
//     return `${baseUrl}${apiFunction}?q=${apiFunctionParams}&APPID=${credentials}`;
// }
//
// // call api and return data
//
// // store data in variable
//
// // return data to users
//
// // if error return in location unavailable please check input
//
//
//
//
// let apiAddress = buildApiAddressString(weatherApiBaseAddress, 'forecast', 'london,gb', apiKey);
//
// console.log(apiAddress);
//
//
// const data = getDataFromApi(apiAddress);
//
// data.then(data => {
//         console.log(data)
//     }
// );
// styles
import "../scss/style.scss";

// imports

import weatherForecast from '@/js/components/WeatherForecast';

const currentWeatherInputs = {
    'country': [
        '.current-weather__country',
    ],
};

new weatherForecast('.current-weather', currentWeatherInputs, '.current-weather__result');
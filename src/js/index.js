// styles
import "../scss/style.scss";

// imports

import CurrentWeather from '@/js/components/CurrentWeather';

const currentWeatherInputs = [
    '.current-weather__city',
    '.current-weather__country',
];

new CurrentWeather('.current-weather', currentWeatherInputs, '.current-weather__window');





const location = "Buenos Aires,ar";
const api_key = "577ccf4d179e930d4fec6b575ca6c00b";
const url_base_weather="http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q= ${location}&appid=${api_key}&units=metric`;

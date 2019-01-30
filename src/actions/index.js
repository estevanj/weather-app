import transformForecast  from './../services/transformForecast';
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA ='SET_FORECAST_DATA';
export const api_key = "577ccf4d179e930d4fec6b575ca6c00b";
export const url = "http://api.openweathermap.org/data/2.5/forecast";

const setCity = (payload) => (
    {type:SET_CITY, payload}
  )
  const setForecastData = payload =>({
    type: SET_FORECAST_DATA, payload
  })

  export const setSelectedCity = payload =>{
    return dispatch =>{
      const url_forecast = `${url}?q=${payload}&appid=${api_key}`;
      // activar en el estado un indicador de busqueda de datos.
      dispatch(setCity(payload));
      return fetch(url_forecast).then(
            data => (data.json())
            ).then(
                weather_data => {
                    const forecastData = transformForecast(weather_data)
                // modificar el estado con el resultado de la promise (fetch)
                dispatch(setForecastData({city:payload, forecastData}))
              }
            ); 
    }
  }
import moment from "moment";

const getCurrentDayForecast = (data, title) =>({
    weekday: moment(data.applicable_date).format('dddd'),
    date: moment(data.applicable_date).format('MMMM Do'),
    location: title,
    temperature: Math.round(data.main.temp),
    weatherIcon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    weatherDescription: data.weather[0].description,
    max_temp: Math.round(data.main.temp_max),
    min_temp: Math.round(data.main.temp_min)
});

export default getCurrentDayForecast;
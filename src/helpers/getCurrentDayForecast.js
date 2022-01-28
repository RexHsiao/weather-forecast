import moment from "moment";

const getCurrentDayForecast = (data, title) =>({
    weekday: moment(data.applicable_date).format('dddd'),
    date: moment(data.applicable_date).format('MMMM Do'),
    location: title,
    temperature: Math.round(data.the_temp),
    weatherIcon: `https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`,
    weatherDescription: data.weather_state_name,
    max_temp: Math.round(data.max_temp),
    min_temp: Math.round(data.min_temp)
});

export default getCurrentDayForecast;
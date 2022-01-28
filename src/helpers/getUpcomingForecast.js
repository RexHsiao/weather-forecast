import moment from "moment";

const getWeekday = data => moment(data).format('dddd').substring(0, 3);

const getUpcomingDaysForecast = data => 
    data.slice(1).map(day => ({
        imgUrl: day.weather_state_abbr,
        temperature: Math.round(day.max_temp),
        weekday: getWeekday(day.applicable_date),
        weatherDescription: day.weather_state_name,
    }));

export default getUpcomingDaysForecast;
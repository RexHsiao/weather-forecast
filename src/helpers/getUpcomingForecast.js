import moment from "moment";

const getWeekday = data => moment(data).format('dddd').substring(0, 3);
const getWeekdayTime = data => moment(data).format('HH:mm');

const getUpcomingDaysForecast = data => 
    data.slice(1).map(day => ({
        id: day.dt,
        imgUrl: day.weather[0].icon,
        temperature: Math.round(day.main.temp_max),
        weekday: getWeekday(day.dt_txt),
        weekdayTime: getWeekdayTime(day.dt_txt),
        weatherDescription: day.weather[0].description,
    }));

export default getUpcomingDaysForecast;
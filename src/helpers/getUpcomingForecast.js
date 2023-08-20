const getWeekday = data => {
    const date = new Date((data) * 1000)
    const weekday = date.toString().substring(0, 3)
    const weekdayTime = date.toTimeString().substring(0, 5)
    return {
        weekday, weekdayTime

    }
};

const getUpcomingDaysForecast = (data) => 
    data.slice(1).map(day => ({
        id: day.dt,
        imgUrl: day.weather[0].icon,
        temperature: Math.round(day.main.temp_max),
        weekday: getWeekday(day.dt).weekday,
        weekdayTime: getWeekday(day.dt).weekdayTime,
        weatherDescription: day.weather[0].description,
    }));

export default getUpcomingDaysForecast;
import {useState, useEffect } from 'react';

import getCurrentDayDetails from '../helpers/getCurrentDayDetails';
import getCurrentDayForecast from '../helpers/getCurrentDayForecast';
import getUpcomingForecast from '../helpers/getUpcomingForecast';

const BASE_URL = 'http://api.openweathermap.org';

const UseForecast = () => {
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [term, setTerm] = useState('');
    const [city, setCity] = useState(null)
    const [options, setOptions] = useState([]);
    const [forecast, setForecast] = useState(null);

    const getSearchOptions = async (term) => {
        fetch(
          `${BASE_URL}/geo/1.0/direct?q=${term?.trim()}&limit=5&lang=en&appid=${
            process.env.REACT_APP_API_KEY
          }`
        )
          .then((res) => res.json())
          .then((data) => setOptions(data || []))
          .catch((e) => console.log({ e }))
    }

    const getForecast = (data) => {
        fetch(
          `${BASE_URL}/data/2.5/forecast?lat=${data.lat}&lon=${data.lon}&units=metric&lang=en&appid=${process.env.REACT_APP_API_KEY}`
        )
          .then((res) => res.json())
          .then((data) => {
            const forecastData = {
              ...data.city,
              list: data.list.slice(0, 6),
            }
            gatherForecastData(forecastData)
          })
          .catch((e) => console.log({ e }))
    }

    const gatherForecastData = async (data) => {
        const currentDay = getCurrentDayForecast(data.list[0], city.name);
        const currentDayDetails = getCurrentDayDetails(data.list[0]);
        const upcomingDays = getUpcomingForecast(data.list);
        
        setForecast({currentDay, currentDayDetails, upcomingDays});
        setLoading(false);
    }

    const onOptionSelect = (option) => {
        setCity(option)
    }

    const onInputChange = (e, cityName) => {
        const value = e?.target?.value.trim() || cityName
        setTerm(value)
        setOptions([])
        
        if (!!value) {
            getSearchOptions(value)
        }
    }

    //call the api
    const submitRequest = async () => {
        setLoading(true);
        setError(false);

        if (term === '') {
            setError('Please enter a city name to search');
            setLoading(false);
            return
        }
        
        if (term !== city?.name) {
            onInputChange(null, term.trim())
        }

        if (!city || !options) {
            setError('There is no such location');
            setLoading(false);
            return
        }

        getForecast(city)
        setTerm('')
        setCity(null)
    };

    useEffect(() => {
        if (city) {
          setTerm(city.name)
          setOptions([])
        }
    }, [city])

    const resetForecast = () => {
        setForecast(null);
    }

    return {
        isError, isLoading, forecast, submitRequest, resetForecast, onInputChange, term, onOptionSelect, options
    }
};

export default UseForecast;
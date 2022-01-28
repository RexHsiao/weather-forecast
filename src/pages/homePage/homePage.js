import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './homePage.scss';

import CITIES from './homeData';

import Page from '../../components/page';
import HomeBackground from '../../components/backgrounds/homeBackground';
import DetailBackground from '../../components/backgrounds/detailBackground';
import Form from '../../components/form';
import Board from '../../components/board';
import Directory from '../../components/directory';
import Loader from '../../components/loader';
import Error from '../../components/error';
import Forecast from '../../components/forecast';
import ArrowBack from '../../components/arrowBack';

import useForecast from '../../hooks/UseForecast';

const HomePage = ({handleToggle, toggle}) => {
    const { isError, isLoading, forecast, submitRequest, submitRequests, resetForecast } = useForecast();
    const [locations, setLocations] = useState(CITIES);
    const [cities, setCities] = useState([]);
    const [addCitiesForecasts, setAddCitiesForecasts] = useState([]);
    const initForecasts = async () => {
        const newCities = [];
        locations.map(location => newCities.push(location.title));
        setCities(newCities);
        const initialForecasts = await submitRequests(newCities);
        return initialForecasts;
    };
    const [info, setInfo] = useState('TODAY');
    const [isSearching, setSearching] = useState(false);
    const [forecasts, setForecasts] = useState(initForecasts);

    useEffect(() => {
        if(isSearching){
            infoSetting("SEARCH");
        }
        if(!isSearching || !forecast){
            infoSetting("TODAY");
        }
        if(forecast){
            infoSetting(forecast.currentDay.date);
            if(!checkCities(forecast.currentDay.location)){
                const newCity = forecast;
                addNewCityForecast(newCity);
            }
        }
    }, [isSearching, forecast]);


    const addNewCityForecast = async (city) => {
        const newCities = addCitiesForecasts;
        newCities.push(city);
        setAddCitiesForecasts(newCities);
    };

    const searchSetting = () => {
        setSearching(!isSearching)
    }

    const infoSetting = (info) => {
        setInfo(info);
    }

    const onSubmit = async (value) => {
        submitRequest(value);
    };

    const backHome = () => {
        resetForecast();
        setSearching(false);
    }

    const checkCities = (city) => {
        const addCities = [];
        setForecasts(forecasts.then(value => value.filter(l => addCities.push(l.currentDay.location))));
        addCitiesForecasts.map(forecast => addCities.push(forecast.currentDay.location));
        
        if(cities.includes(city) || addCities.includes(city)){
            return true
        }
        return false;
    }

    const remove = async (location) => {
        setAddCitiesForecasts(addCitiesForecasts.filter(l => l.currentDay.location !== location));
        setForecasts(forecasts.then(value => value.filter(l => l.currentDay.location !== location)));
        setCities(cities.filter(l => l !== location));
    }
    
    return (
        <Page 
            handleToggle={handleToggle}
            toggle={toggle}
            info={info}
        >   
            {(!forecast && !isSearching) && 
                <HomeBackground toggle={toggle}>
                    {(!isLoading) &&
                        <Directory 
                            toggle={toggle}
                            locations={locations} 
                            forecasts={forecasts}
                            addCitiesForecasts={addCitiesForecasts}
                            searchSetting={searchSetting}
                            submitSearch={onSubmit}
                            infoSetting={infoSetting}
                            remove={remove}
                        />
                    }
                    {isLoading && <Loader />}
                    {isError && <Error message={isError} />}
                </HomeBackground>
            }
            {isSearching && !forecast &&
                <DetailBackground toggle={toggle}>
                    <Board toggle={toggle}>
                        <ArrowBack backHome={backHome}/>
                        {!isLoading && <Form submitSearch={onSubmit} toggle={toggle}/>}
                        {isLoading && <Loader />}
                        {isError && <Error message={isError} />}
                    </Board>
                </DetailBackground>
            }
            {forecast && 
                <DetailBackground toggle={toggle}>
                    <Forecast forecast={forecast} backHome={backHome}/>
                </DetailBackground> 
            }
        </Page>
    );
};


export default HomePage;
import React, { useState, useEffect } from 'react';
import './homePage.scss';

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

import { connect } from 'react-redux';
import { addForecast } from '../../redux/forecasts/forecasts.action';

const HomePage = ({handleToggle, toggle, addForecast}) => {
    const { isError, isLoading, forecast, submitRequest, resetForecast, onInputChange, term, onOptionSelect, options } = useForecast();
    const [info, setInfo] = useState('TODAY');
    const [isSearching, setSearching] = useState(false);

    useEffect(() => {
        if(isSearching){
            infoSetting("SEARCH");
        }
        if(!isSearching || !forecast){
            infoSetting("TODAY");
        }
        if(forecast){
            addForecast(forecast);
            infoSetting(forecast.currentDay.date);
        }
    }, [isSearching, forecast]);

    const searchSetting = () => {
        setSearching(!isSearching)
    }

    const infoSetting = (info) => {
        setInfo(info);
    }

    const onSubmit = async (value) => {
        await submitRequest(value);
    };

    const backHome = () => {
        resetForecast();
        setSearching(false);
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
                            searchSetting={searchSetting}
                            submitSearch={onSubmit}
                            infoSetting={infoSetting}
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
                        {!isLoading && 
                            <Form 
                                onInputChange={onInputChange} 
                                term={term} 
                                submitSearch={onSubmit} 
                                toggle={toggle}
                                onOptionSelect={onOptionSelect}
                                options={options}
                            />
                        }
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

const mapDispatchToProps = dispatch => ({
    addForecast: (forecast) => dispatch(addForecast(forecast))
})

export default connect(null, mapDispatchToProps)(HomePage);
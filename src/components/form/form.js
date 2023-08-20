import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Suggestions from '../suggestions';
import './form.scss';

const Form = ({onInputChange, term, submitSearch, toggle, options, onOptionSelect}) => {
    const [ location, setLocation ] = useState('');

    useEffect(() => {
        setLocation(term || '');
    }, [term])

    const onSubmit = (e) => {
        e.preventDefault();
        submitSearch(term);
        setLocation('');
    }
    return (
        <div className="form">
            <form onSubmit={onSubmit}>
                <div>
                    <input 
                        type="text" 
                        aria-label="location" 
                        className="input form-control"
                        placeholder="Search for location"
                        required 
                        value={location}
                        onChange={onInputChange}
                    />
                </div>
                <Suggestions options={options} onSelect={onOptionSelect} />
                <div>
                    <button 
                    type="submit" 
                    className={`button button-${toggle?'dark':''}`}
                    onClick={onSubmit}
                    >
                        SEARCH
                    </button>
                </div>
                
            </form>
        </div>
    );
};

Form.propTypes = {
    submitSearch: PropTypes.func.isRequired,
};

export default Form;
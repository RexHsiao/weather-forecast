import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './form.scss';

const Form = ({submitSearch, toggle}) => {
    const [ location, setLocation ] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        if (!location || location === '') return;
        submitSearch(location);
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
                        onChange={e => setLocation(e.target.value)}
                    />
                </div>
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
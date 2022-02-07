import React from 'react';
import './modeToggle.scss';

import { connect } from 'react-redux';
import { toggleTheme } from '../../../../redux/theme/theme.actions'

const ModeToggle = ({ toggleTheme, darkMode }) => {
    return (
        <div className="modeToggle">
            <span className="toggle-tag">LIGHT</span>
            
            <input
                checked={darkMode}
                onChange={toggleTheme}
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{ background: darkMode && '#FF0070'}}
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
            
            <span className="toggle-tag">DARK</span>
        </div>
      );
};

const mapStateToProps = ({theme: {darkMode}}) => ({
    darkMode
});

const mapDispatchToProps = dispatch => ({
    toggleTheme: () => dispatch(toggleTheme())
})

export default connect(mapStateToProps, mapDispatchToProps)(ModeToggle);

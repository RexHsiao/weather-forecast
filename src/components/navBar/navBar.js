import React from 'react';
import './navBar.scss';

import { connect } from 'react-redux';

import Logo from './components/logo';
import Info from './components/info';
import ModeToggle from './components/modeToggle';

const NavBar = ({darkMode, info, isOn, handleToggle}) => {

    return (
        <div className={`navBar navBar-${darkMode?'dark':''}`}>
            <Logo />
            <Info>{info}</Info>
            <ModeToggle isOn={isOn} handleToggle={handleToggle}/>
        </div>
    );
}

const mapStateToProps = ({theme: {darkMode}}) => ({
    darkMode
});

export default connect(mapStateToProps)(NavBar);
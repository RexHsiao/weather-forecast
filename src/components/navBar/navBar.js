import React from 'react';
import './navBar.scss';

import Logo from './components/logo';
import Info from './components/info';
import ModeToggle from './components/modeToggle';

const NavBar = ({toggle, info, isOn, handleToggle}) => {
    let mode = 'light';
    if(toggle){
        mode = 'dark';
    }

    return (
        <div className={`navBar navBar-${mode}`}>
            <Logo />
            <Info>{info}</Info>
            <ModeToggle isOn={isOn} handleToggle={handleToggle} toggle={toggle}/>
        </div>
    );
}

export default NavBar;
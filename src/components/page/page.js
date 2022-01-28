import React from 'react';
import './page.scss';

import NavBar from '../navBar';



const Page = ({children, info, handleToggle, toggle}) => {
    return (
        <div className="page">
            <NavBar 
                info={info}
                toggle={toggle} 
                handleToggle={handleToggle}
            />
            {children}
        </div>
    );
};

export default Page;
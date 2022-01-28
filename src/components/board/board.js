import React from 'react';
import './board.scss';

const Board = ({children, toggle}) => (
    <div className={`board board-${toggle?'dark':''}`}>
        {children}
    </div> 
);

export default Board;
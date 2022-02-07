import ThemeActionTypes from './theme.types';

const INITIAL_STATE = {
    darkMode: false,
};

const themeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case ThemeActionTypes.TOGGLE_THEME:
            return{
                ...state,
                darkMode: !state.darkMode
            }
        default:
            return state
    }
}

export default themeReducer;
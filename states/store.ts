import { configureStore } from '@reduxjs/toolkit';
import stakingReducer from './features/staking/slice';
import tokenReducer from './features/token/slice';
import alertReducer from './features/alert/slice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            staking: stakingReducer,
            token: tokenReducer,
            alert: alertReducer
        },
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

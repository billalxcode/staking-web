import { configureStore } from '@reduxjs/toolkit';
import stakingReducer from './features/staking/slice';
import tokenReducer from './features/token/slice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            staking: stakingReducer,
            token: tokenReducer,
        },
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

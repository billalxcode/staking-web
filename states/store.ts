import { configureStore } from '@reduxjs/toolkit';
import stakingReducer from './features/staking/slice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            staking: stakingReducer,
        },
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

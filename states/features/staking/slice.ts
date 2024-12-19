import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface StakingState {
    value: string;
    duration: number;
}

export const StakingInitialState: StakingState = {
    value: '3 Minutes',
    duration: 180,
};

const stakingSlice = createSlice({
    name: 'staking',
    initialState: StakingInitialState,
    reducers: {
        setValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
        setDuration: (state, action: PayloadAction<number>) => {
            state.duration = action.payload;
        },
    },
});
const stakingReducer = stakingSlice.reducer;
export const { setValue, setDuration } = stakingSlice.actions;
export default stakingReducer;

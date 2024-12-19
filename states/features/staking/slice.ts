import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface StakingState {
    value: string;
    duration: number;
    contract: `0x${string}` | null
}

export const StakingInitialState: StakingState = {
    value: 'd30',
    duration: 180,
    contract: null
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
        setContract: (state, action: PayloadAction<string> ) => {
            state.contract = action.payload as `0x${string}`
        }
    },
});
const stakingReducer = stakingSlice.reducer;
export const { setValue, setDuration, setContract} = stakingSlice.actions;
export default stakingReducer;

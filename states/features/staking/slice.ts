import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface StakingState {
    value: string;
    duration: number;
    amount: string;
    contract: `0x${string}` | null;
}

export const StakingInitialState: StakingState = {
    value: 'd30',
    duration: 180,
    amount: '0',
    contract: null,
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
        setContract: (state, action: PayloadAction<string>) => {
            state.contract = action.payload as `0x${string}`;
        },
        setAmount: (state, action: PayloadAction<string>) => {
            state.amount = action.payload;
        },
    },
});
const stakingReducer = stakingSlice.reducer;
export const { setValue, setDuration, setContract, setAmount } =
    stakingSlice.actions;
export default stakingReducer;

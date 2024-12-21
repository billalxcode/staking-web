import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface StakingState {
    value: string;
    duration: number;
    amount: string;
    contract: `0x${string}` | null;
    action: 'approve' | 'insufficient' | 'stake' | 'amount';
}

export const StakingInitialState: StakingState = {
    value: 'd30',
    duration: 180,
    amount: '0',
    contract: null,
    action: 'amount',
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
        setAction: (
            state,
            action: PayloadAction<
                'approve' | 'insufficient' | 'stake' | 'amount'
            >,
        ) => {
            state.action = action.payload;
        },
    },
});
const stakingReducer = stakingSlice.reducer;
export const { setValue, setDuration, setContract, setAmount, setAction } =
    stakingSlice.actions;
export default stakingReducer;

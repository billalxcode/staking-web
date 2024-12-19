import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TokenStateTypes = {
    name: string;
    symbol: string;
    decimals: number;
    balance: string;
    allowance: string;
};

export const TokenInitialState: TokenStateTypes = {
    name: '-',
    symbol: '-',
    decimals: 18,
    balance: '0',
    allowance: '0',
};

const tokenSlice = createSlice({
    name: 'token',
    initialState: TokenInitialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setSymbol: (state, action: PayloadAction<string>) => {
            state.symbol = action.payload;
        },
        setDecimals: (state, action: PayloadAction<number>) => {
            state.decimals = action.payload;
        },
        setBalance: (state, action: PayloadAction<string>) => {
            state.balance = action.payload;
        },
        setAllowance: (state, action: PayloadAction<string>) => {
            state.allowance = action.payload;
        },
    },
});

const tokenReducer = tokenSlice.reducer;
export const { setName, setSymbol, setDecimals, setBalance, setAllowance } =
    tokenSlice.actions;
export default tokenReducer;

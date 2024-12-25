import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

export interface AlertState {
    message: string | ReactNode | null;
    variant?: 'success' | 'danger' | 'info' | 'warning' | 'loading' | 'normal';
    duration?: number;
    isHidden?: boolean;
}

const initialState: AlertState = {
    message: null,
    variant: 'info',
    duration: 4000,
    isHidden: true,
};

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        setMessage: (
            state,
            action: PayloadAction<string | ReactNode | null>,
        ) => {
            state.message = action.payload;
        },
        setVariant: (
            state,
            action: PayloadAction<
                'success' | 'danger' | 'info' | 'warning' | 'loading' | 'normal'
            >,
        ) => {
            state.variant = action.payload;
        },
        setDuration: (state, action: PayloadAction<number>) => {
            state.duration = action.payload;
        },
        setIsHidden: (state, action: PayloadAction<boolean>) => {
            state.isHidden = action.payload;
        },
    },
});

const alertReducer = alertSlice.reducer;
export const { setMessage, setVariant, setDuration, setIsHidden } =
    alertSlice.actions;
export default alertReducer;

import { useAppDispatch, useAppSelector } from '@/states/hooks';
import { RootState } from '@/states/store';
import { useCallback } from 'react';
import {
    setAllowance,
    setBalance,
    setDecimals,
    setName,
    setSymbol,
} from './slice';

export default function useToken() {
    const dispatch = useAppDispatch();
    const { name, symbol, decimals, balance, allowance } = useAppSelector(
        (state: RootState) => state.token,
    );

    const updateName = useCallback(
        (newName: string) => {
            dispatch(setName(newName));
        },
        [dispatch],
    );

    const updateSymbol = useCallback(
        (newSymbol: string) => {
            dispatch(setSymbol(newSymbol));
        },
        [dispatch],
    );

    const updateDecimals = useCallback(
        (newDecimals: number) => {
            dispatch(setDecimals(newDecimals));
        },
        [dispatch],
    );

    const updateBalance = useCallback(
        (newBalance: string) => {
            dispatch(setBalance(newBalance));
        },
        [dispatch],
    );

    const updateAllowance = useCallback(
        (newAllowance: string) => {
            dispatch(setAllowance(newAllowance));
        },
        [dispatch],
    );

    return {
        name,
        symbol,
        decimals,
        balance,
        allowance,
        updateName,
        updateSymbol,
        updateDecimals,
        updateBalance,
        updateAllowance,
    };
}

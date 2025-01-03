import { useAppDispatch, useAppSelector } from '@/states/hooks';
import { RootState } from '@/states/store';
import JSBI from 'jsbi';
import { useCallback, useEffect } from 'react';
import useToken from '../token/hooks';
import {
    setAction,
    setAmount,
    setContract,
    setDuration,
    setValue,
} from './slice';

export default function useStaking() {
    const dispatch = useAppDispatch();
    const { value, duration, contract, amount, action } = useAppSelector(
        (state: RootState) => state.staking,
    );
    const { allowance, balance } = useToken();

    const updateValue = useCallback(
        (newValue: string) => {
            dispatch(setValue(newValue));
        },
        [dispatch],
    );

    const updateDuration = useCallback(
        (newDuration: number) => {
            dispatch(setDuration(newDuration));
        },
        [dispatch],
    );

    const updateContract = useCallback(
        (newContract: string) => {
            dispatch(setContract(newContract));
        },
        [dispatch],
    );

    const updateAmount = useCallback(
        (newAmount: string) => {
            dispatch(setAmount(newAmount));
        },
        [dispatch],
    );

    const updateAction = useCallback(
        (newAction: 'approve' | 'insufficient' | 'stake' | 'amount') => {
            dispatch(setAction(newAction));
        },
        [dispatch],
    );

    useEffect(() => {
        const jsbiAllowance = JSBI.BigInt(allowance);
        const jsbiBalance = JSBI.BigInt(balance);

        if (JSBI.lessThan(jsbiAllowance, jsbiBalance)) {
            updateAction('approve');
        } else {
            updateAction('stake');
        }
    }, [allowance, balance, amount, updateAction]);

    return {
        action,
        value,
        duration,
        contract,
        amount,
        updateValue,
        updateDuration,
        updateContract,
        updateAmount,
        updateAction,
    };
}

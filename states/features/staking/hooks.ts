import { useAppDispatch, useAppSelector } from '@/states/hooks';
import { RootState } from '@/states/store';
import { useCallback, useEffect, useState } from 'react';
import { setAmount, setContract, setDuration, setValue } from './slice';
import JSBI from "jsbi"
import useToken from '../token/hooks';

export default function useStaking() {
    const dispatch = useAppDispatch();
    const { value, duration, contract, amount } = useAppSelector(
        (state: RootState) => state.staking,
    );
    const { allowance, balance } = useToken()
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [action, setAction] = useState<"approve" | "insufficient" | "stake" | "amount">("amount")
    
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

    useEffect(() => {
        const jsbiAllowance = JSBI.BigInt(allowance)
        const jsbiBalance = JSBI.BigInt(balance)
        
        if (JSBI.lessThan(jsbiAllowance, jsbiBalance)) {
            setAction("approve")
        } else {
            setAction("stake")
        }
    }, [
        allowance,
        balance,
        amount
    ])

    return {
        action,
        value,
        duration,
        contract,
        amount,
        errorMessage,
        updateValue,
        updateDuration,
        updateContract,
        updateAmount,
    };
}

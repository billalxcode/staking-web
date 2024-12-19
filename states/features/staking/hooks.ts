import { useAppDispatch, useAppSelector } from '@/states/hooks';
import { RootState } from '@/states/store';
import { useCallback } from 'react';
import { setContract, setDuration, setValue } from './slice';

export default function useStaking() {
    const dispatch = useAppDispatch();
    const { value, duration, contract } = useAppSelector(
        (state: RootState) => state.staking,
    );

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

     const updateContract = useCallback((newContract: string) => {
        dispatch(setContract(newContract))
     }, [dispatch])

    return {
        value,
        duration,
        contract,
        updateValue,
        updateDuration,
        updateContract
    };
}

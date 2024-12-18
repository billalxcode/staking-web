import { useAppDispatch, useAppSelector } from '@/states/hooks';
import { RootState } from '@/states/store';
import { useCallback } from 'react';
import { setDuration, setValue } from './slice';

export default function useStaking() {
    const dispatch = useAppDispatch();
    const { value, duration } = useAppSelector(
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

    return {
        value,
        duration,
        updateValue,
        updateDuration,
    };
}

import { AppDispatch, RootState } from '@/states/store';
import { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    AlertState,
    setDuration,
    setIsHidden,
    setMessage,
    setVariant,
} from './slice';

export default function useAlert() {
    const dispatch: AppDispatch = useDispatch();
    const timerRef = useRef<NodeJS.Timeout>(null);

    const { message, variant, duration, isHidden } = useSelector(
        (state: RootState) => state.alert,
    );

    const updateMessage = useCallback(
        (newMessage: string) => {
            dispatch(setMessage(newMessage));
        },
        [dispatch],
    );

    const startAlertTimer = useCallback(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        if (duration) {
            timerRef.current = setTimeout(() => {
                dispatch(setIsHidden(true));
            }, duration);
        }
    }, [duration, dispatch]);

    const setAlertMessage = useCallback(
        (props: AlertState, isStartDuration: boolean = false) => {
            dispatch(setMessage(props.message));
            dispatch(setVariant(props.variant ?? 'info'));
            dispatch(setDuration(props.duration ?? 3000));
            dispatch(setIsHidden(false));

            if (isStartDuration) startAlertTimer();
        },
        [dispatch, startAlertTimer],
    );

    const clearAlertMessage = useCallback(() => {
        if (timerRef.current) clearTimeout(timerRef.current);

        dispatch(setIsHidden(true));
    }, [dispatch]);

    return {
        message,
        variant,
        duration,
        isHidden,
        updateMessage,
        setAlertMessage,
        startAlertTimer,
        clearAlertMessage,
    };
}

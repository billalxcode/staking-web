import { useEffect, useState } from "react";
import useStakingInfo from "./useStakingInfo";

export default function useWithdrawInfo() {
    const { holderUnlocktime } = useStakingInfo()
    const [isEmergency, setIsEmergency] = useState<boolean>(false)

    useEffect(() => {
        const dateNow = new Date().getTime()
        const nextWithdrawl = holderUnlocktime?.getTime() ?? 0

        if (holderUnlocktime) {
            setIsEmergency(nextWithdrawl > dateNow)
        } else {
            setIsEmergency(false)
        }
        
    }, [holderUnlocktime])

    return {
        isEmergency
    }
}
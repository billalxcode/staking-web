import useStaking from "@/states/features/staking/hooks";
import useContractByName from "./useContractByName";
import { SupportedContracts } from "@/config/constants";

export default function useStakingContract() {
    const { value } = useStaking()
    const { contract: staking_contract } = useContractByName(value as keyof SupportedContracts)

    return {
        staking_contract
    }
}
import { parseUnits } from "viem";

export function convert_wei(amount: string, decimals: number) {
    const ethValue = parseUnits(amount, decimals)
    return ethValue

}
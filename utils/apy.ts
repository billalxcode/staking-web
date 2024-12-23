export function calculateAPY(
    {
        rewardPerSecond,
        totalStakedTokens,
        decimals,
    }: {
        rewardPerSecond: bigint;
        totalStakedTokens: bigint;
        decimals: number;
    },
    lockDurationDays: number,
): number {
    if (
        typeof rewardPerSecond == 'undefined' ||
        typeof totalStakedTokens == 'undefined' ||
        typeof decimals == 'undefined'
    )
        return 0;
    const totalRewards =
        parseFloat(rewardPerSecond.toString()) * (lockDurationDays * 86400);

    // Tangani kasus jika totalStakedTokens adalah nol
    if (totalStakedTokens === BigInt(0)) {
        return 0;
    }

    // Hitung APY dan konversi ke persentase
    const annualRewardRate =
        (totalRewards * 365) / parseFloat(totalStakedTokens.toString());
    const apy = (Number(annualRewardRate) / Math.pow(10, decimals)) * 100;

    return apy; // Hasil dalam persen
}

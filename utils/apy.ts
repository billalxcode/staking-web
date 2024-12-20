export function calculateAPY(
    rewardPerSecond: number,
    totalStakedTokens: number,
    compoundingPeriodsPerYear: number = 365
  ): number {
    if (totalStakedTokens === 0) {
      return 0;
    }
  
    const rewardPerYear = rewardPerSecond * 365 * 24 * 60 * 60;
  
    const rewardRate = rewardPerYear / totalStakedTokens;
    const apy = Math.pow(1 + rewardRate / compoundingPeriodsPerYear, compoundingPeriodsPerYear) - 1;
  
    return parseFloat((apy * 100).toFixed(2));
  }
  
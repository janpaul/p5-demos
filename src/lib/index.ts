export const isPrime = (num: number): boolean => {
  if (num <= 1) return false // negatives
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false
  return true
}

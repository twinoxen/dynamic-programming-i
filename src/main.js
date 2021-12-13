/* eslint-disable no-param-reassign */
export function memoize(func) {
  const memory = new Map();

  function memFunc(...args) {
    const key = JSON.stringify(args);
    if (memory.has(key)) {
      return memory.get(key);
    }

    const results = func(...args);

    memory.set(key, results);

    return results;
  }

  memFunc.memory = memory;

  return memFunc;
}

export const fibonacciCache = new Map();
export function fibonacci(index) {
  if (fibonacciCache.has(index)) {
    return fibonacciCache.get(index);
  }

  if (index === 0 || index === 1) {
    return index;
  }

  const results = fibonacci(index - 1) + fibonacci(index - 2);

  fibonacciCache.set(index, results);

  return results;
}

export function exchangeForCoins(total, coins, baseUnit = 100 /* 100 pennies in a dollar */) {
  let totalToBaseUnit = total * baseUnit;

  return coins
    .sort((a, b) => a.value - b.value)
    .reverse()
    .reduce((acc, curr) => {
      const unitsIn = Math.floor(totalToBaseUnit / (curr.value * baseUnit));

      totalToBaseUnit -= unitsIn * curr.value * baseUnit;

      acc[curr.name] = unitsIn;

      return acc;
    }, {});
}

export const waysToClimbStairsCache = new Map();
export function waysToClimbStairs(steps) {
  if (waysToClimbStairsCache.has(steps)) {
    return waysToClimbStairsCache.get(steps);
  }

  if (steps === 0 || steps === 1 || steps === 2) {
    return steps;
  }

  const results = waysToClimbStairs(steps - 1) + waysToClimbStairs(steps - 2);

  waysToClimbStairsCache.set(steps, results);

  return results;
}

export function fillKnapsack(items, limit) {
  return items
    .sort((a, b) => a.weight - b.weight)
    .reverse()
    .reduce((acc, curr) => {
      const unitsIn = Math.floor(limit / curr.weight);

      limit -= unitsIn * curr.weight;

      acc[curr.name] = unitsIn;

      return acc;
    }, {});
}

export default {};

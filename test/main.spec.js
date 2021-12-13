import {
  memoize,
  fibonacci,
  fibonacciCache,
  exchangeForCoins,
  waysToClimbStairs,
  waysToClimbStairsCache,
  fillKnapsack,
} from '../src/main';

describe('dynamic programming', () => {
  it('functions can be memoized with generic function caching', () => {
    const sum = (a, b) => a + b;
    const memoizedSum = memoize(sum);

    expect(memoizedSum(2, 2)).toEqual(4);
    expect(memoizedSum(2, 2)).toEqual(4);
    expect(Array.from(memoizedSum.memory.entries())).toEqual([['[2,2]', 4]]);
  });

  it('find value of index of the fibonacci sequence', () => {
    expect(fibonacci(20)).toEqual(6765);
    expect(fibonacci(30)).toEqual(832040);

    expect(Array.from(fibonacciCache.entries())).toEqual([
      [2, 1],
      [3, 2],
      [4, 3],
      [5, 5],
      [6, 8],
      [7, 13],
      [8, 21],
      [9, 34],
      [10, 55],
      [11, 89],
      [12, 144],
      [13, 233],
      [14, 377],
      [15, 610],
      [16, 987],
      [17, 1597],
      [18, 2584],
      [19, 4181],
      [20, 6765],
      [21, 10946],
      [22, 17711],
      [23, 28657],
      [24, 46368],
      [25, 75025],
      [26, 121393],
      [27, 196418],
      [28, 317811],
      [29, 514229],
      [30, 832040],
    ]);
  });

  it('can exchange any dollar amount to coins with the least amount of coins returned', () => {
    expect(exchangeForCoins(
      1.23,
      [
        { name: 'pennies', value: 0.01 },
        { name: 'nickles', value: 0.05 },
        { name: 'dimes', value: 0.10 },
        { name: 'quarters', value: 0.25 },
      ],
    )).toEqual({
      quarters: 4, dimes: 2, nickles: 0, pennies: 3,
    });
  });

  it('determine how many ways to climb stairs with {n} steps', () => {
    expect(waysToClimbStairs(3)).toEqual(3);
    expect(waysToClimbStairs(5)).toEqual(8);

    expect(Array.from(waysToClimbStairsCache.entries())).toEqual([
      [3, 3],
      [4, 5],
      [5, 8],
    ]);
  });

  it('knapsack has the most value', () => {
    expect(fillKnapsack(
      [
        { name: 'nunjucks', weight: 33 },
        { name: 'rope', weight: 5 },
        { name: 'cakes', weight: 7 },
        { name: 'goggles', weight: 10 },
        { name: 'dice', weight: 1 },
      ],
      125,
    )).toEqual({
      cakes: 0,
      dice: 1,
      goggles: 2,
      nunjucks: 3,
      rope: 1,
    });
  });
});

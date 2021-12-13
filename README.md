# dynamic Programming

(Breaking problems into sub problems) ** {n} solving those problems and remembering those answer to not have to solve them again. 

## Dynamic programming prerequisites
* Optimal substructure 
  * If you solve the sub problems in the best way possible you solve the main problem. 
* Overlapping sub-problems
  * Deterministically and redundantly solving problems.

### Memoisation 
For any given input caching the return result of a function to not have to compute it over again. 

### Tabulation 
Filling out a look-up collect with answers ahead of time. For recursive solutions you work top-down. For iterative work bottom-up. 

### Top-down approach
Start by breaking a problem into sub problems and those into smaller problems etc...
normally in a recursive solution.

### Bottom-up approach
Working your way towards a solution by solving easy problems piggybacking on those to help solve harder problems hoping to solve the main problem. Normally in a iterative solution.

#### Recursive
* More intuitive
* Potential to have a deep call depth
* Potential for stack overflows

#### Iterative
* Less intuitive
* Potential to compute more than whats necessary

## Problems to solve
* Find value for index of number in fibonacci sequence.
* Dollars exchanged for coins with least amount of coins.
* Find how many different ways you can climb stairs with "n" steps (you can take 1 or 2 steps at a time).
* Fill a knapsack with items (that have weight) so the knapsack is the heaviest without breaking its weight limit. 

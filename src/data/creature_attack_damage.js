const attackDamage = new Map([
    [-1, { low: 2, moderate: 3, high: 3, extreme: 4 }],
    [0, { low: 3, moderate: 4, high: 5, extreme: 6 }],
    [1, { low: 4, moderate: 5, high: 6, extreme: 8 }],
    [2, { low: 6, moderate: 8, high: 9, extreme: 11 }],
    [3, { low: 8, moderate: 10, high: 12, extreme: 15 }],
    [4, { low: 9, moderate: 12, high: 14, extreme: 18 }],
    [5, { low: 11, moderate: 13, high: 16, extreme: 20 }],
    [6, { low: 12, moderate: 15, high: 18, extreme: 23 }],
    [7, { low: 13, moderate: 17, high: 20, extreme: 25 }],
    [8, { low: 15, moderate: 18, high: 22, extreme: 28 }],
    [9, { low: 16, moderate: 20, high: 24, extreme: 30 }],
    [10, { low: 17, moderate: 22, high: 26, extreme: 33 }],
    [11, { low: 19, moderate: 23, high: 28, extreme: 35 }],
    [12, { low: 20, moderate: 25, high: 30, extreme: 38 }],
    [13, { low: 21, moderate: 27, high: 32, extreme: 40 }],
    [14, { low: 23, moderate: 28, high: 34, extreme: 43 }],
    [15, { low: 24, moderate: 30, high: 36, extreme: 45 }],
    [16, { low: 25, moderate: 31, high: 37, extreme: 48 }],
    [17, { low: 26, moderate: 32, high: 38, extreme: 50 }],
    [18, { low: 27, moderate: 33, high: 40, extreme: 53 }],
    [19, { low: 28, moderate: 35, high: 42, extreme: 55 }],
    [20, { low: 29, moderate: 37, high: 44, extreme: 58 }],
    [21, { low: 31, moderate: 38, high: 46, extreme: 60 }],
    [22, { low: 32, moderate: 40, high: 48, extreme: 63 }],
    [23, { low: 33, moderate: 42, high: 50, extreme: 65 }],
    [24, { low: 35, moderate: 44, high: 52, extreme: 68 }],
  ]);
  
  export default attackDamage;
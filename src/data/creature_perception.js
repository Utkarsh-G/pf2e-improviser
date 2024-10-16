const creaturePercMap = new Map([
    [-1, { terrible: 0, low: 2, moderate: 5, high: 8, extreme: 9 }],
    [0, { terrible: 1, low: 3, moderate: 6, high: 9, extreme: 10 }],
    [1, { terrible: 2, low: 4, moderate: 7, high: 10, extreme: 11 }],
    [2, { terrible: 3, low: 5, moderate: 8, high: 11, extreme: 12 }],
    [3, { terrible: 4, low: 6, moderate: 9, high: 12, extreme: 14 }],
    [4, { terrible: 6, low: 8, moderate: 11, high: 14, extreme: 15 }],
    [5, { terrible: 7, low: 9, moderate: 12, high: 15, extreme: 17 }],
    [6, { terrible: 8, low: 11, moderate: 14, high: 17, extreme: 18 }],
    [7, { terrible: 10, low: 12, moderate: 15, high: 18, extreme: 20 }],
    [8, { terrible: 11, low: 13, moderate: 16, high: 19, extreme: 21 }],
    [9, { terrible: 12, low: 15, moderate: 18, high: 21, extreme: 23 }],
    [10, { terrible: 14, low: 16, moderate: 19, high: 22, extreme: 24 }],
    [11, { terrible: 15, low: 18, moderate: 21, high: 24, extreme: 26 }],
    [12, { terrible: 16, low: 19, moderate: 22, high: 25, extreme: 27 }],
    [13, { terrible: 18, low: 20, moderate: 23, high: 26, extreme: 29 }],
    [14, { terrible: 19, low: 22, moderate: 25, high: 28, extreme: 30 }],
    [15, { terrible: 20, low: 23, moderate: 26, high: 29, extreme: 32 }],
    [16, { terrible: 22, low: 25, moderate: 28, high: 30, extreme: 33 }],
    [17, { terrible: 23, low: 26, moderate: 29, high: 32, extreme: 35 }],
    [18, { terrible: 24, low: 27, moderate: 30, high: 33, extreme: 36 }],
    [19, { terrible: 26, low: 29, moderate: 32, high: 35, extreme: 38 }],
    [20, { terrible: 27, low: 30, moderate: 33, high: 36, extreme: 39 }],
    [21, { terrible: 28, low: 32, moderate: 35, high: 38, extreme: 41 }],
    [22, { terrible: 30, low: 33, moderate: 36, high: 39, extreme: 43 }],
    [23, { terrible: 31, low: 34, moderate: 37, high: 40, extreme: 44 }],
    [24, { terrible: 32, low: 36, moderate: 38, high: 42, extreme: 46 }],
  ]);
  
  export default creaturePercMap;
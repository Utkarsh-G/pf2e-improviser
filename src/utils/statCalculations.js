// import creatureAcData from '../data/creature_ac.yaml';

const calculateAC = (level, option) => {
    const levelOneModerate = 15;
    const acModerate = level > 0 ? levelOneModerate + level + Math.floor(level/2) - 1 : levelOneModerate + level;

    const modifiers = { 
      low: acModerate - 2, 
      moderate: acModerate, 
      high: acModerate + 1, 
      extreme: acModerate + 4 
    };
    return modifiers[option.toLowerCase()];
};

const calculatePerception = (level, option) => {
  const levelThreeModerate = 9;
  const perceptionModerate = level > 2 ? levelThreeModerate + level + Math.floor(level - 1 / 3) - 1 - 3 : levelThreeModerate + level - 3;
  let extremeVariance = 4;
  if (level > 2 && level != 4 && level != 6) {
    extremeVariance = 5;
  }
  if (level > 12 && level != 14 && level != 16) {
    extremeVariance = 6;
  }
  if (level > 21) {
    extremeVariance = 7;
  }
  if (level == 24) {
    extremeVariance = 8;
  }
  const modifiers = { 
    low: level == 24 ? perceptionModerate - 4 : perceptionModerate - 3, 
    moderate: perceptionModerate, 
    high: level == 24 ? perceptionModerate + 4 : perceptionModerate + 3, 
    extreme: perceptionModerate + extremeVariance
  };
  return modifiers[option.toLowerCase()];
};

// Add similar functions for other stats...

const genericCalculation = (level, option) => {
    const baseValue = level * 2 + 10;
    const modifiers = { low: -2, moderate: 0, high: 2, extreme: 4 };
    return baseValue + modifiers[option.toLowerCase()];
  };

const statCalculations = {
  AC: calculateAC,
  Perception: calculatePerception,
  // Add other stat calculation functions here...
  // placeholder for now
  HP: genericCalculation,
  Fort: genericCalculation,
  Ref: genericCalculation,
  Will: genericCalculation,
  Attack: genericCalculation,
  'Attk Damage': genericCalculation,
  'Save DC': genericCalculation,
  'AoE Damage': genericCalculation,
  'AoE Radius': genericCalculation
};

export default statCalculations;
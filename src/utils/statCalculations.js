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
  // Placeholder calculation, replace with actual logic
  const baseValue = level + 10;
  const modifiers = { low: -2, moderate: 0, high: 2, extreme: 4 };
  return baseValue + modifiers[option.toLowerCase()];
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
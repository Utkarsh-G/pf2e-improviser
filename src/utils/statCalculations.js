import armorClass from '../data/creature_ac.js';
import attackDamage from '../data/creature_attack_damage.js';
import creatureAtkMap from '../data/creature_attack.js';
import creatureDCMap from '../data/creature_dc.js';
import creatureHPMap from '../data/creature_hp.js';
import creaturePercMap from '../data/creature_perception.js';
import creatureSkillsMap from '../data/creature_skills.js';
import creatureSavesMap from '../data/creature_saves.js';
import aoeDamage from '../data/creature_aoe_damage.js';
import aoeRadiusMap from '../data/creature_aoe_radius.js';
import hazardHPMap from '../data/hazard_hp.js';
import hazardHardnessMap from '../data/hazard_hardness.js';
import hazardDamageMap from '../data/hazard_damage.js';


const statCalculations = {
  AC: (level, option) => {return armorClass.get(level)[option]},
  Perc: (level, option) => {return creaturePercMap.get(level)[option]},
  HP: (level, option) => {return creatureHPMap.get(level)[option]},
  Fort: (level, option) => {return creatureSavesMap.get(level)[option]},
  Ref: (level, option) => {return creatureSavesMap.get(level)[option]},
  Will: (level, option) => {return creatureSavesMap.get(level)[option]},
  Atk: (level, option) => {return creatureAtkMap.get(level)[option]},
  'Dmg': (level, option) => {return attackDamage.get(level)[option]},
  'DC': (level, option) => {return creatureDCMap.get(level)[option]},
  'AoE Dmg': (level, option) => {return aoeDamage.get(level)[option]},
  'Area': (level, option) => {return aoeRadiusMap.get(level)[option]},
  Skill: (level, option) => {return creatureSkillsMap.get(level)[option]},
  Hardness: (level, option) => {return hazardHardnessMap.get(level)[option]},
  'Hazard HP': (level, option) => {return hazardHPMap.get(level)[option]},
  'Hazard Damage': (level, option) => {return hazardDamageMap.get(level)[option]},
};

export default statCalculations;
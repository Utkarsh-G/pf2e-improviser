import armorClass from '../data/creature_ac.js';
import attackDamage from '../data/creature_attack_damage.js';
import creatureAttackMap from '../data/creature_attack.js';
import creatureDCMap from '../data/creature_dc.js';
import creatureHPMap from '../data/creature_hp.js';
import creaturePerceptionMap from '../data/creature_perception.js';
import creatureSkillsMap from '../data/creature_skills.js';
import creatureSavesMap from '../data/creature_saves.js';
import aoeDamage from '../data/creature_aoe_damage.js';
import aoeRadiusMap from '../data/creature_aoe_radius.js';


const statCalculations = {
  AC: (level, option) => {return armorClass.get(level)[option]},
  Perception: (level, option) => {return creaturePerceptionMap.get(level)[option]},
  HP: (level, option) => {return creatureHPMap.get(level)[option]},
  Fort: (level, option) => {return creatureSavesMap.get(level)[option]},
  Ref: (level, option) => {return creatureSavesMap.get(level)[option]},
  Will: (level, option) => {return creatureSavesMap.get(level)[option]},
  Attack: (level, option) => {return creatureAttackMap.get(level)[option]},
  'Attk Damage': (level, option) => {return attackDamage.get(level)[option]},
  'Save DC': (level, option) => {return creatureDCMap.get(level)[option]},
  'AoE Damage': (level, option) => {return aoeDamage.get(level)[option]},
  'AoE Radius': (level, option) => {return aoeRadiusMap.get(level)[option]},
  Skill: (level, option) => {return creatureSkillsMap.get(level)[option]}
};

export default statCalculations;
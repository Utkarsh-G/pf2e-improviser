import React from 'react';
import './QuickReferenceModal.css';
import dcByLevel from '../data/dc_by_level';
import creatureXP from '../data/creature_xp';
import encounterXP from '../data/encounter_xp';
import treasureByEncounter from '../data/treasure_by_encounter';
import treasureShortened from '../data/treasure_shortened';
const QuickReferenceModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="back-button" onClick={onClose}>Back</button>
        <h2>DC By Level</h2>
        {/* Add your quick reference content here */}
        <div className="table-container">
            <table className="quick-reference-table spaced-columns">
                <thead>
                <tr>
                    <th>Level</th>
                    <th>DC</th>
                </tr>
                </thead>
                <tbody>
                {Array.from({ length: 13 }, (_, index) => (
                    <tr key={index} className={index % 5 === 0 ? "highlight-row" : ""}>
                    <td>{index}</td>
                    <td>{dcByLevel.get(index)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            
            <table className="quick-reference-table spaced-columns">
                <thead>
                <tr>
                    <th>Level</th>
                    <th>DC</th>
                </tr>
                </thead>
                <tbody>
                {Array.from({ length: 13 }, (_, index) => {
                    const level = index + 13;
                    return (
                        <tr key={level} className={level % 5 === 0 ? "highlight-row" : ""}>
                            <td>{level}</td>
                            <td>{dcByLevel.get(level)}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>

        <h2>XP Budget by Encounter Severity</h2>

        <div className="table-container">
            <table className="quick-reference-table spaced-columns">
                <thead>
                <tr>
                    <th>Severity</th>
                    <th>XP Budget</th>
                    <th>Adjustment</th>
                </tr>
                </thead>
                <tbody>
                {Array.from(encounterXP.entries(), ([severity, data]) => (
                    <tr key={severity}>
                        <td>{severity}</td>
                        <td>{data.budget}</td>
                        <td>{data.adjustment}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            
            <table className="quick-reference-table spaced-columns">
                <thead>
                <tr>
                    <th>Creature Level</th>
                    <th>XP</th>
                </tr>
                </thead>
                <tbody>
                {Array.from(creatureXP.entries(), ([level, xp]) => (
                    <tr key={level}>
                        <td>{level}</td>
                        <td>{xp}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

        <h2>Treasure Per Encounter by Level and Encounter Severity</h2>

        <table className="quick-reference-table spaced-columns treasure-table treasure-full">
                <thead>
                <tr>
                    <th>Level</th>
                    <th>Total Treasure per Level for Party of 4</th>
                    <th>Low</th>
                    <th>Moderate</th>
                    <th>Severe</th>
                    <th>Extreme</th>
                    <th>Extra per Additional Player</th>
                </tr>
                </thead>
                <tbody>
                {Array.from(treasureByEncounter.entries(), ([level, data]) => (
                    <tr key={level} className={level % 5 === 0 ? "highlight-row" : ""}>
                        <td data-label="Level">{level}</td>
                        <td data-label="Total">{data.total}</td>
                        <td data-label="Low">{data.low}</td>
                        <td data-label="Moderate">{data.moderate}</td>
                        <td data-label="Severe">{data.severe}</td>
                        <td data-label="Extreme">{data.extreme}</td>
                        <td data-label="Extra">{data.extra}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <table className="quick-reference-table spaced-columns treasure-table treasure-shortened">
                <thead>
                <tr>
                    <th>Level</th>
                    <th>Moderate / Severe</th>
                </tr>
                </thead>
                <tbody>
                {Array.from(treasureShortened.entries(), ([level, data]) => (
                    <tr key={level} className={level % 5 === 0 ? "highlight-row" : ""}>
                        <td data-label="Level">{level}</td>
                        <td data-label="Moderate / Severe">{data}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        <table className="quick-reference-table spaced-columns">
          <thead>
            <tr>
              <th>Challenge</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Light Conditions</td>
              <td>Dazzled, Enfeebled 1, Stupefied 1, Clumsy 1, Frightened 1, Sickened 1, Slowed 1, Stunned 1</td>
            </tr>
            <tr>
              <td>Moderate Conditions</td>
              <td>Prone, Drained, Immobilized, Grabbed, Blinded, Persistent Damage, Numbered conditions at 2</td>
            </tr>
            <tr>
              <td>Hard Conditions</td>
              <td>Confused, Restrained, Numbered conditions at 3+</td>
            </tr>
            <tr>
              <td>Terrain</td>
              <td> Difficult Terrain: Rubble, Thicket, Waterlogged, Incline. Height Difference, Slippery, Narrow, Damaging. </td>
            </tr>
            <tr>
              <td>Concealment or Obscuration</td>
              <td>Darkness, Fog, Smoke, Cover</td>
            </tr>
          </tbody>
        </table>

        <table className="quick-reference-table spaced-columns">
          <thead>
            <tr>
              <th>Homebrewed Mechanics</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Thematic Weakness</td>
              <td>Once per minute, creature is Stunned 1 when exposed to its thematic weakness.</td>
            </tr>
            <tr>
              <td>Set Up the Blast</td>
              <td>Creature uses its last action to set up a clearly-indicated area ability at the start of its next turn.</td>
            </tr>
            <tr>
              <td>Pinata</td>
              <td>Big boss turns into a horde of weaker minions when defeated. </td>
            </tr>
            <tr>
              <td>Form-Up!</td>
              <td>Horde combines into a more powerful unit after two of its members fall. </td>
            </tr>
            <tr>
              <td>Dark Devourer</td>
              <td>Quickened 1 and +2 circumstance bonus to AC when in darkness.</td>
            </tr>
            <tr>
              <td>Shadowy</td>
              <td>Can turn invisible in dim light or darkness. Automatically revealed by bright light.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuickReferenceModal;
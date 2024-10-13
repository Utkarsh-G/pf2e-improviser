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
      </div>
    </div>
  );
};

export default QuickReferenceModal;
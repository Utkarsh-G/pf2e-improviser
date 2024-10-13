import React from 'react';
import './QuickReferenceModal.css';
import dcByLevel from '../data/dc_by_level';
const QuickReferenceModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="back-button" onClick={onClose}>Back</button>
        <h2>Quick Reference</h2>
        {/* Add your quick reference content here */}
        <table className="quick-reference-table spaced-columns">
          <thead>
            <tr>
              <th>Level</th>
              <th>DC</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 25 }, (_, index) => (
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
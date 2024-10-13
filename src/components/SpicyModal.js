import React from 'react';
import './QuickReferenceModal.css';

const SpicyModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="back-button" onClick={onClose}>Back</button>
        <h2>Conditions</h2>
        <table className="quick-reference-table spaced-columns">
          <thead>
            <tr>
              <th>Severity</th>
              <th>Conditions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Light</td>
              <td>Dazzled, Enfeebled 1, Stupefied 1, Clumsy 1, Frightened 1, Sickened 1, Slowed 1, Stunned 1</td>
            </tr>
            <tr>
              <td>Moderate</td>
              <td>Prone, Drained, Immobilized, Grabbed, Blinded, Persistent Damage, Numbered conditions at 2</td>
            </tr>
            <tr>
              <td>Hard</td>
              <td>Confused, Restrained, Numbered conditions at 3+</td>
            </tr>
          </tbody>
        </table>

        <h2>Objectives</h2>
        <table className="quick-reference-table spaced-columns">
          <tbody>
            <tr>
              <td>1</td>
              <td>Defeat all enemies to 0HP.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Turn off a complex hazard.</td>
            </tr>
            <tr>
              <td>3</td>
              <td>One or all PCs must move to a particular area.</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Perform environtmental action(s). E.g. pull the lever next to the blue chest.</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Take a particular enemy alive for questioning or some other reason.</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Prevent an enemy (scout) from retreating.</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Take / steal / disarm one particular object being wielded by an enemy.</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Survive until a particular time.</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Convince or coerce an enemy or a neutral creature of something.</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Pick one of the above, and complete it within a given timeframe.</td>
            </tr>
          </tbody>
        </table>

        <h2>Mid-Combat Twist</h2>
        <table className="quick-reference-table spaced-columns">
          <tbody>
            <tr>
              <td>1</td>
              <td>Pinata: One strong creature (when bloodied) turns into 3-4 weak creatures.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Our Powers Combined:  3-4 weak creatures combine to turn into 1 strong entity.</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Transformation: One moderately weak creature, when defeated, turns into a strong creature with full HP.</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Power Down Transformation: A strong creature, when defeated, turns into a moderately weak creature with full HP and improved movement.</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Reinforcements arrive.</td>
            </tr>
            <tr>
              <td>6</td>
              <td>All enemies start fleeing, possibly in different directions.</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Enemies surrender and start negotiating.</td>
            </tr>
            <tr>
              <td>8</td>
              <td>The battlefield changes to favour the enemies.</td>
            </tr>
            <tr>
              <td>9</td>
              <td>The battlefield changes to become more challenging for all combatants.</td>
            </tr>
            <tr>
              <td>10</td>
              <td>A neutral creature joins the fight - against the PCs, or against the enemies, or both.</td>
            </tr>
          </tbody>
        </table>


        <h2>Terrain</h2>
        <table className="quick-reference-table spaced-columns">
          <tbody>
            <tr>
              <td>1</td>
              <td>Blocking Terrain / Cover</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Hazardous Terrain with damage</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Difficult Terrain or Greater Difficult Terrain - Rubble, slope, tight passage, water, thicket etc.</td>
            </tr>
            <tr>
              <td>4</td>
              <td>High Ground - raised platform, ledge, tree etc.</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Spell or spell-like effect - such as wall spells.</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Chasm (10-20ft)</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Shortcuts - Portals, slides, ropes, drops etc.</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Slippery terrain or narrow walkway.</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Terrain that moves - platforms, vehicles, conveyor belts etc.</td>
            </tr>
            <tr>
              <td>10</td>
              <td>PCs split up by terrain, such as a portcullis or a chasm.</td>
            </tr>
          </tbody>
        </table>

        <h2>Environment</h2>
        <table className="quick-reference-table spaced-columns">
          <tbody>
            <tr>
              <td>1</td>
              <td>Darkness or Dim Light</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Obscurement - Fog, Smoke etc.</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Pushing / pulling force - wind, earthquake, wave, magnetic field etc.</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Breakable, flammable, or explosive objects - furniture, barrels etc.</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Too hot or too cold</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Complex Hazard</td>
            </tr>
            <tr>
              <td>7</td>
              <td>A 3rd party creature is a threat to everyone.</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Slowly filling hazard - acid, water, sand, lava etc.</td>
            </tr>
            <tr>
              <td>9</td>
              <td> Environment that can be changed by PCs - lever for floodgates, lever for a drawbridge etc.</td>
              more        </tr>
            <tr>
              <td>10</td>
              <td>The battle takes place inside or on top of a creature (bigger than 30ft on all sides).</td>
            </tr>
          </tbody>
        </table>

        <h2>NPC Roleplay</h2>
        <p>
          Consider the enemy's motivation, why they fight, and what they might say on their turn and when they are about to lose.
        </p>

      </div>
    </div>
  );
};

export default SpicyModal;
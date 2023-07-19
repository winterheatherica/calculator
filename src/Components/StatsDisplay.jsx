import React from 'react';
import CharacterStats from './CharacterStats';
import CharacterData from './CharacterData'

const StatsDisplay = ({ CharId, inputsData }) => {
  const characterStatsDisplay = CharacterStats.find((character) => character.CharId === CharId) || {
    CharId,
    CharName: 'Character Name',
    basehp: {
        'Lvl 80+': 0,
        'Lvl 90': 0,
    },
    hpPercentage: 0,
    hpFlat: 0,
    baseatk: {
        'Lvl 80+': 300.19,
        'Lvl 90': 322.89,
    },
    atkPercentage: 0,
    atkFlat: 0,
    basedef: {
        'Lvl 80+': 743.11,
        'Lvl 90': 799.3,
    },
    defPercentage: 0,
    defFlat: 0,
    elementalMastery: 0,
    critRate: 5,
    baseCritRate: 5.0,
    critDamage: 50,
    baseCritDamage: 50.0,
    healingBonus: 0,
    incomingHealingBonus: 0,
    shieldStrength: 0,
    energyRecharge: 0,
    cooldownReduction: 0,
    physicalDamageBonus: 0,
    hydroDamageBonus: 0,
    pyroDamageBonus: 0,
    electroDamageBonus: 0,
    anemoDamageBonus: 0,
    cryoDamageBonus: 0,
    geoDamageBonus: 0,
    dendroDamageBonus: 0,
    physRes: 0,
    hydroRes: 0,
    pyroRes: 0,
    electroRes: 0,
    anemoRes: 0,
    cryoRes: 0,
    geoRes: 0,
    dendroRes: 0,
    baseBonus: {
        'Lvl 80+': 38.4,
        'Lvl 90': 38.4,
    },
  };

  const characterName = CharacterData.find((character) => character.CharId === CharId) || {
    CharName: 'Character Name',
  };

  const { basehp, hpPercentage, hpFlat } = characterStatsDisplay;
  const maxhp = basehp * (1 + hpPercentage) + hpFlat;


  return (
    <div>
      <p>Character ID: {CharId}</p>
      <p>Character Name: {characterName ? characterName.CharName : 'Character Name'}</p>
      <p>Max HP: {maxhp ? maxhp : 0}</p>
      <p>ATK: {characterStatsDisplay ? characterStatsDisplay.atk : 0}</p>
      <p>DEF: {characterStatsDisplay ? characterStatsDisplay.def : 0}</p>
      <p>Elemental Mastery: {characterStatsDisplay ? characterStatsDisplay.elementalMastery : 0}</p>
      <p>Crit Rate: {characterStatsDisplay ? characterStatsDisplay.baseCritRate : 0}</p>
      <p>Crit Damage: {characterStatsDisplay ? characterStatsDisplay.baseCritDamage : 0}</p>
      {/* Display other stats similarly */}
    </div>
  );
};

export default StatsDisplay;


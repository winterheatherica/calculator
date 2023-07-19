import React, { useState } from 'react';
import StatsDisplay from './StatsDisplay';

const InputBar = ({ onChange, value }) => {
  return (
    <div className="flex items-center">
      <input
        type="number"
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded w-20 h-8 px-2"
      />
    </div>
  );
};

const InputValue = () => {
  const [inputsData, setInputsData] = useState([
    { value: '', selectedOption: 'Select Stats' },
    { value: '', selectedOption: 'Select Stats' },
    { value: '', selectedOption: 'Select Stats' },
    { value: '', selectedOption: 'Select Stats' },
    { value: '', selectedOption: 'Select Stats' },
  ]);

  const options = [
    { value: 'Select Stats', label: 'Select Stats' },
    { value: 'hpPercentage', label: 'HP%' },
    { value: 'hpFlat', label: 'HP' },
    { value: 'atkPercentage', label: 'ATK%' },
    { value: 'atkFlat', label: 'ATK' },
    { value: 'defPercentage', label: 'DEF%' },
    { value: 'defFlat', label: 'DEF' },
    { value: 'elementalMastery', label: 'Elemental Mastery' },
    { value: 'critRate', label: 'CRIT Rate' },
    { value: 'critDamage', label: 'CRIT DMG' },
    { value: 'healingBonus', label: 'Healing Bonus' },
    { value: 'energyRecharge', label: 'Energy Recharge' },
    { value: 'pyroDamageBonus', label: 'Pyro DMG Bonus' },
    { value: 'hydroDamageBonus', label: 'Hydro DMG Bonus' },
    { value: 'electroDamageBonus', label: 'Electro DMG Bonus' },
    { value: 'cryoDamageBonus', label: 'Cryo DMG Bonus' },
    { value: 'anemoDamageBonus', label: 'Anemo DMG Bonus' },
    { value: 'geoDamageBonus', label: 'Geo DMG Bonus' },
    { value: 'dendroDamageBonus', label: 'Dendro DMG Bonus' },
    { value: 'physicalDamageBonus', label: 'Physical DMG Bonus' },
  ];

  const handleNumberInputChange = (id, event) => {
    const updatedInputsData = inputsData.map((inputData, index) =>
      id === index ? { ...inputData, value: event.target.value } : inputData
    );
    setInputsData(updatedInputsData);
  };

  const handleOptionChange = (id, event) => {
    const updatedInputsData = inputsData.map((inputData, index) =>
      id === index ? { ...inputData, selectedOption: event.target.value } : inputData
    );
    setInputsData(updatedInputsData);
  };

  return (
    <div className="space-y-1 border-4 border-purple-400">
      {inputsData.map((inputData, index) => (
        <div key={index} className="flex items-center space-x-1">
          <InputBar
            value={inputData.value}
            onChange={(event) => handleNumberInputChange(index, event)}
          />
          <div>
            <select
              value={inputData.selectedOption}
              onChange={(event) => handleOptionChange(index, event)}
              className="border-gray-300 rounded"
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label.trim()}
                </option>
              ))}
            </select>
          </div>
        </div>
      ))}
      {/* Pass the inputsData array to the StatsDisplay component */}
      <StatsDisplay CharId={30} inputsData={inputsData} />
    </div>
  );
};

export default InputValue;
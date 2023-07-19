import React from 'react';
import InputValue from './InputValue';
import StatsDisplay from './StatsDisplay';

const Artifacts = () => {
  return (
    <div>
      <div className="flex flex-row justify-center items-center border-4 border-purple-300">
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index}>
            <InputValue />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <StatsDisplay CharId={30} />
      </div>
    </div>
  );
};

export default Artifacts;

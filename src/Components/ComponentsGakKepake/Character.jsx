// import React from 'react';
// import PropTypes from 'prop-types';
// import CharacterStats from './CharacterStats';

// const Character = ({ characterId, characterName, characterVision, characterStats, characterLevel, characterTalent }) => {
//   return (
//     <div className="character">
//       <h2>Character ID: {characterId}</h2>
//       <h3>Name: {characterName}</h3>
//       <p>Vision: {characterVision}</p>
//       <CharacterStats stats={characterStats} />
//       <p>Level: {characterLevel}</p>
//       {characterTalent && (
//         <div>
//           <h4>Talents:</h4>
//           <ul>
//             {characterTalent.map((talent, index) => (
//               <li key={index}>{talent}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// Character.propTypes = {
//   characterId: PropTypes.number.isRequired,
//   characterName: PropTypes.string.isRequired,
//   characterVision: PropTypes.string.isRequired,
//   characterStats: PropTypes.object.isRequired,
//   characterLevel: PropTypes.number.isRequired,
//   characterTalent: PropTypes.array,
// };

// export default Character;

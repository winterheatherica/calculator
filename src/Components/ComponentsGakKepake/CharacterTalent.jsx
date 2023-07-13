// import React from 'react';
// import PropTypes from 'prop-types';

// const CharacterTalent = ({ numRows, characterId }) => {
//   // Data talent for each character
//   const talentData = {
//     1: [
//       {
//         skillName: 'Lightning Stiletto DMG',
//         levels: ['Lv1', 'Lv2', 'Lv3', 'Lv4', 'Lv5', 'Lv6', 'Lv7', 'Lv8', 'Lv9', 'Lv10', 'Lv11', 'Lv12', 'Lv13'],
//         values: ['50.40%', '54.18%', '57.96%', '63%', '66.78%', '70.56%', '75.60%', '80.64%', '85.68%', '90.72%', '95.76%', '100.80%', '107.10%'],
//       },
//       {
//         skillName: 'Slashing DMG',
//         levels: ['Lv1', 'Lv2', 'Lv3', 'Lv4', 'Lv5', 'Lv6', 'Lv7', 'Lv8', 'Lv9', 'Lv10', 'Lv11', 'Lv12', 'Lv13'],
//         values: ['168%', '180.60%', '193.20%', '210%', '222.60%', '235.20%', '252%', '268.80%', '285.60%', '302.40%', '319.20%', '336%', '357%'],
//       },
//       {
//         skillName: 'Thunderclap Slash DMG',
//         levels: ['Lv1', 'Lv2', 'Lv3', 'Lv4', 'Lv5', 'Lv6', 'Lv7', 'Lv8', 'Lv9', 'Lv10', 'Lv11', 'Lv12', 'Lv13'],
//         values: [
//           '84%×2',
//           '90.3%×2',
//           '96.6%×2',
//           '105%×2',
//           '111.3%×2',
//           '117.6%×2',
//           '126%×2',
//           '134.4%×2',
//           '142.8%×2',
//           '151.2%×2',
//           '159.6%×2',
//           '168%×2',
//           '178.5%×2',
//         ],
//       },
//     ],
//     // Add more character talent data as needed
//     // 2: [ ... ],
//     // 3: [ ... ],
//   };

//   const characterTalent = talentData[characterId];

//   if (!characterTalent) {
//     return <div>No talent data available for this character.</div>;
//   }

//   // Generate an array with the specified number of rows
//   const rows = Array.from({ length: numRows }, (_, index) => index + 1);

//   return (
//     <table>
//       <thead>
//         <tr>
//           {/* Render the header row */}
//           <th>Nama Skill</th>
//           {characterTalent[0].levels.map((level, index) => (
//             <th key={index}>{level}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {/* Render the data rows */}
//         {characterTalent.map((talent, index) => (
//           <tr key={index}>
//             <td>{talent.skillName}</td>
//             {talent.values.map((value, valueIndex) => (
//               <td key={valueIndex}>{value}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// CharacterTalent.propTypes = {
//   numRows: PropTypes.number.isRequired,
//   characterId: PropTypes.number.isRequired,
// };

// export default CharacterTalent;

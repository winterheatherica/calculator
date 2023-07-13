// import React, { useState } from 'react';

// const CharacterStats = () => {
//   const [atk, setAtk] = useState(0);
//   const [hp, setHp] = useState(0);
//   const [def, setDef] = useState(0);
//   const [characterLvl, setCharacterLvl] = useState(1);
//   const [characterTalent, setCharacterTalent] = useState([]);
//   const [enemyLvl, setEnemyLvl] = useState(1);
//   const [enemyRes, setEnemyRes] = useState(0);
//   const [damageBonus, setDamageBonus] = useState(0);
//   const [criticalDamage, setCriticalDamage] = useState(0);

//   // Fungsi untuk mengubah nilai ATK
//   const handleAtkChange = (event) => {
//     setAtk(parseInt(event.target.value, 10));
//   };

//   // Fungsi untuk mengubah nilai HP
//   const handleHpChange = (event) => {
//     setHp(parseInt(event.target.value, 10));
//   };

//   // Fungsi untuk mengubah nilai DEF
//   const handleDefChange = (event) => {
//     setDef(parseInt(event.target.value, 10));
//   };

//   // Fungsi untuk mengubah nilai Character Level
//   const handleCharacterLvlChange = (event) => {
//     setCharacterLvl(parseInt(event.target.value, 10));
//   };

//   // Fungsi untuk mengubah nilai Character Talent
//   const handleCharacterTalentChange = (event) => {
//     const talents = event.target.value.split(',').map((talent) => talent.trim());
//     setCharacterTalent(talents);
//   };

//   // Fungsi untuk mengubah nilai Enemy Level
//   const handleEnemyLvlChange = (event) => {
//     setEnemyLvl(parseInt(event.target.value, 10));
//   };

//   // Fungsi untuk mengubah nilai Enemy Resistance
//   const handleEnemyResChange = (event) => {
//     setEnemyRes(parseInt(event.target.value, 10));
//   };

//   // Fungsi untuk mengubah nilai Damage Bonus
//   const handleDamageBonusChange = (event) => {
//     setDamageBonus(parseInt(event.target.value, 10));
//   };

//   // Fungsi untuk mengubah nilai Critical Damage
//   const handleCriticalDamageChange = (event) => {
//     setCriticalDamage(parseInt(event.target.value, 10));
//   };

//   return (
//     <div>
//       <h2>Character Stats</h2>
//       <label>
//         ATK:
//         <input type="number" value={atk} onChange={handleAtkChange} />
//       </label>
//       <br />
//       <label>
//         HP:
//         <input type="number" value={hp} onChange={handleHpChange} />
//       </label>
//       <br />
//       <label>
//         DEF:
//         <input type="number" value={def} onChange={handleDefChange} />
//       </label>
//       <br />
//       <label>
//         Character Level:
//         <input type="number" value={characterLvl} onChange={handleCharacterLvlChange} />
//       </label>
//       <br />
//       <label>
//         Character Talent (comma-separated):
//         <input type="text" value={characterTalent.join(', ')} onChange={handleCharacterTalentChange} />
//       </label>
//       <br />
//       <label>
//         Enemy Level:
//         <input type="number" value={enemyLvl} onChange={handleEnemyLvlChange} />
//       </label>
//       <br />
//       <label>
//         Enemy Resistance:
//         <input type="number" value={enemyRes} onChange={handleEnemyResChange} />
//       </label>
//       <br />
//       <label>
//         Damage Bonus:
//         <input type="number" value={damageBonus} onChange={handleDamageBonusChange} />
//       </label>
//       <br />
//       <label>
//         Critical Damage:
//         <input type="number" value={criticalDamage} onChange={handleCriticalDamageChange} />
//       </label>
//     </div>
//   );
// };

// export default CharacterStats;
// import React, { useState } from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// const Drop = () => {
//   const [columns, setColumns] = useState([
//     { id: 'column-1', title: 'Flower of Life', type: 'ArtifactFlower', stats: ['HP', 'HPPercentage'] },
//     { id: 'column-2', title: 'Plume of Death', type: 'ArtifactPlume', stats: ['ATK', 'ATKPercentage'] },
//     { id: 'column-3', title: 'Sands of Eon', type: 'ArtifactSands', stats: ['DEF', 'DEFPercentage'] },
//     { id: 'column-4', title: 'Goblet of Eonothem', type: 'ArtifactGoblet', stats: ['CritRate', 'CritDamage'] },
//     { id: 'column-5', title: 'Circlet of Logos', type: 'ArtifactCirclet', stats: ['ElementalMastery', 'EnergyRecharge', 'HealingBonus', 'PhysicalDMGBonus', 'PyroDMGBonus', 'HydroDMGBonus', 'DendroDMGBonus', 'ElectroDMGBonus', 'AnemoDMGBonus', 'CryoDMGBonus', 'GeoDMGBonus'] }
//   ]);

//   const [selectedItem, setSelectedItem] = useState(null);

//   // Fungsi untuk menangani perubahan urutan kolom saat di-drop
//   const handleDragEnd = (result) => {
//     if (!result.destination) return;

//     const updatedColumns = [...columns];
//     const [removedColumn] = updatedColumns.splice(result.source.index, 1);
//     updatedColumns.splice(result.destination.index, 0, removedColumn);

//     setColumns(updatedColumns);

//     // Ambil data item yang di-drop
//     const item = columns[result.source.index];
//     setSelectedItem(item);
//   };

//   const handleNotification = () => {
//     if (selectedItem) {
//       // Proses item yang di-drop sesuai dengan tipe fotonya
//       switch (selectedItem.type) {
//         case 'ArtifactFlower':
//           console.log('Processing ArtifactFlower');
//           // Ambil nilai-nilai stats dari foto
//           const { statsFlower } = selectedItem;
//           console.log('Stats:', statsFlower);
//           // Proses foto ArtifactFlower
//           break;
//         case 'ArtifactPlume':
//           console.log('Processing ArtifactPlume');
//           // Ambil nilai-nilai stats dari foto
//           const { statsPlume } = selectedItem;
//           console.log('Stats:', statsPlume);
//           // Proses foto ArtifactPlume
//           break;
//         case 'ArtifactSands':
//           console.log('Processing ArtifactSands');
//           // Ambil nilai-nilai stats dari foto
//           const { statsSands } = selectedItem;
//           console.log('Stats:', statsSands);
//           // Proses foto ArtifactSands
//           break;
//         case 'ArtifactGoblet':
//           console.log('Processing ArtifactGoblet');
//           // Ambil nilai-nilai stats dari foto
//           const { statsGoblet } = selectedItem;
//           console.log('Stats:', statsGoblet);
//           // Proses foto ArtifactGoblet
//           break;
//         case 'ArtifactCirclet':
//           console.log('Processing ArtifactCirclet');
//           // Ambil nilai-nilai stats dari foto
//           const { statsCirclet } = selectedItem;
//           console.log('Stats:', statsCirclet);
//           // Proses foto ArtifactCirclet
//           break;
//         default:
//           console.log('Harap drop foto yang dibolehkan');
//           // Tampilkan notifikasi untuk foto yang tidak dibolehkan
//           break;
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Drop Column</h2>
//       <DragDropContext onDragEnd={handleDragEnd}>
//         <Droppable droppableId="columns">
//           {(provided) => (
//             <div
//               ref={provided.innerRef}
//               {...provided.droppableProps}
//               style={{ display: 'flex' }}
//             >
//               {columns.map((column, index) => (
//                 <Draggable key={column.id} draggableId={column.id} index={index}>
//                   {(provided) => (
//                     <div
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                       style={{
//                         width: '100px',
//                         height: '100px',
//                         border: '1px solid black',
//                         margin: '8px',
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center'
//                       }}
//                     >
//                       {column.title}
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>
//       <button onClick={handleNotification}>Save</button>
//     </div>
//   );
// };

// export default Drop;

// import React, { useEffect, useState } from 'react';

// export default function CharacterDisplay() {
//   const [photos, setPhotos] = useState([]);

//   useEffect(() => {
//     const importPhotos = async () => {
//       const importedPhotos = [];

//       for (let i = 1; i <= 20; i++) {
//         const photo = await import(`./GenshinSrc/ca (${i}).png`);
//         importedPhotos.push(photo.default);
//       }

//       setPhotos(importedPhotos);
//     };

//     importPhotos();
//   }, []);

//   return (
//     <div className="flex justify-center">
//       <div className="flex flex-wrap">
//         {photos.map((photo, index) => (
//           <div
//             key={`character-${index + 1}`}
//             className="w-30 h-30 bg-gray-200 mx-1 my-1 flex items-center justify-center"
//           >
//             <img src={photo} alt={`Character ${index + 1}`} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

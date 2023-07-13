import React from 'react';
import imgMyCharacter from '../Image/Icon_Character.webp';
import imgAboutCharacter from '../Image/Icon_Character_Archive.webp';
import imgCalculator from '../Image/Icon_Inventory.webp';
import KeqingBackground from '../Image/KeqingBackground.jpg';
import Button from '../Components/Button';
import GenshinImpactLogo from '../Image/Genshin Impact.svg';

export default function Home() {
  return (
    <div className="flex justify-center bg-purple-300" style={{ backgroundImage: `url(${KeqingBackground})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: 'rgba(0, 0, 0, 1)' }}>
      <div className="Genshin-Impact h-screen flex flex-col justify-center items-center">
        <div className="flex justify-center md:h-screen items-center" style={{ height: '200px', backgroundColor: 'rgba(100, 100, 100, 0)'}}>
          <img src={GenshinImpactLogo} alt="GenshinLogo" className="flex" width={600}/>
        </div>
        <h2 className="md:text-7xl sm:text-4xl text-center text-white mt-4 pb-8" style={{ textShadow: '1px 1px 0 #7E22CE' }}>
        Welcome to Keqing Calc
      </h2>
        <div className="flex flex-col justify-center items-center" style={{ width: '800px' }}>
          <Button to="/MyCharacter" text="My Character" imageSrc={imgMyCharacter}  alt="Logo My Character" />
          <Button to="/Calculator" text="Calculator" imageSrc={imgCalculator} alt="Logo Calculator" />
          <Button to="/AboutCharacter" text="About Character" imageSrc={imgAboutCharacter} alt="Logo About Character" />
        </div>
      </div>
    </div>
  );
}

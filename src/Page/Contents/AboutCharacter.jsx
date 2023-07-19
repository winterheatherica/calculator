import React, { useEffect, useState } from 'react';
import CharacterButton from '../../Components/CharacterButton';
import CharacterData from '../../Components/CharacterData';
import Blank from '../../Image/Icon_Tutorial.webp';
import PanahKanan from '../../Image/panah kanan.png';
import PanahKiri from '../../Image/panah kiri.png';

export default function AboutCharacter() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 70;
  const slidesPerPage = 10;

  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [CharAvatars, setCharAvatars] = useState([]);
  const [characterPhoto, setCharacterPhoto] = useState('');
  const [visionBackground, setVisionBackground] = useState('');
  const [characterBackground, setCharacterBackground] = useState('');

  useEffect(() => {
    const importCharAvatars = async () => {
      const importedCharAvatars = [];

      for (let i = 0; i < CharacterData.length; i++) {
        const characterAva = await import(`./GenshinSrc/ca (${i + 1}).png`);
        importedCharAvatars.push(characterAva.default);
      }

      setCharAvatars(importedCharAvatars);
    };

    importCharAvatars();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + slidesPerPage) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - slidesPerPage + totalSlides) % totalSlides);
  };

  const handleCharacterButtonClick = (index) => {
    setSelectedCharacter(index);
  };

  const renderCharacterButtons = () => {
    const buttons = [];
    for (let i = currentSlide; i < currentSlide + slidesPerPage; i++) {
      if (i >= CharacterData.length) {
        break; 
      }
      const character = CharacterData[i];
      const { CharName, CharVision } = character;
      const avatarIndex = i;
      
      let CharAvatar = '';
      if (i < CharacterData.length) {
        CharAvatar = CharAvatars[avatarIndex];
      } else {
        CharAvatar = `./GenshinSrc/ca (${i}).png`;
      }

      buttons.push(
        <CharacterButton
          key={`character-${i}`}
          CharId={i}
          CharName={CharName}
          CharVision={CharVision}
          CharAvatar={CharAvatar}
          alt={`Character ${i + 1}`}
          isSelected={selectedCharacter === i}
          onClick={() => handleCharacterButtonClick(i)}
          ringClass={ringClass}
        />
      );
    }
    return buttons;
  };

  useEffect(() => {
    if (selectedCharacter !== null) {
      const character = CharacterData[selectedCharacter];
      const { CharName, CharVision } = character;

      if (selectedCharacter < CharacterData.length) {
        import(`./GenshinSrc/${CharName}_Card.webp`)
          .then((photo) => setCharacterPhoto(photo.default))
          .catch((error) => console.error(error));
      } else {
        setCharacterPhoto(Blank);
      }
      
      if (selectedCharacter < CharacterData.length) {
        import(`./GenshinSrc/Logo${CharVision}.png`)
          .then((backgroundImage) => setVisionBackground(backgroundImage.default))
          .catch((error) => console.error(error));
      } else {
        setVisionBackground(Blank);
      }

      if (selectedCharacter < 69) {
        import(`./GenshinSrc/cb (${selectedCharacter + 1}).png`)
          .then((background) => setCharacterBackground(background.default))
          .catch((error) => console.error(error));
      } else {
        setCharacterBackground('');
      }
    } else {
      setCharacterPhoto(Blank);
      setCharacterBackground('');
    }
  }, [selectedCharacter]);

  let characterName = "";
  let characterVision = "";
  let characterClass = "";
  let characterRegion = "";
  
  if (selectedCharacter !== null) {
    const character = CharacterData[selectedCharacter];
    const { CharName, CharVision, CharClass, CharRegion } = character;
    characterName = CharName;
    characterVision = CharVision;
    characterClass = CharClass;
    characterRegion = CharRegion;
  }
  
  const getCharacterStyle = () => {
    const character = CharacterData[selectedCharacter];
    let backgroundClass = "bg-purple-700";
    let ringClass = "ring-4 ring-slate-400";
    let textClass = "text-stone-800";

    if (character) {
      const { CharVision } = character;
      switch (CharVision) {
        case 'Electro':
          backgroundClass = "bg-purple-500";
          ringClass = "ring-4 ring-purple-800";
          textClass = "text-purple-800";
          break;
        case 'Dendro':
          backgroundClass = "bg-lime-400";
          ringClass = "ring-4 ring-lime-700";
          textClass = "text-lime-700";
          break;
        case 'Cryo':
          backgroundClass = "bg-cyan-200";
          ringClass = "ring-4 ring-cyan-500";
          textClass = "text-cyan-500";
          break;
        case 'Hydro':
          backgroundClass = "bg-blue-500";
          ringClass = "ring-4 ring-blue-800";
          textClass = "text-blue-800";
          break;
        case 'Pyro':
          backgroundClass = "bg-orange-600";
          ringClass = "ring-4 ring-orange-900";
          textClass = "text-orange-900";
          break;
        case 'Geo':
          backgroundClass = "bg-yellow-400";
          ringClass = "ring-4 ring-yellow-700";
          textClass = "text-yellow-700";
          break;
        case 'Anemo':
          backgroundClass = "bg-teal-300";
          ringClass = "ring-4 ring-teal-600";
          textClass = "text-teal-600";
          break;
        default:
          break;
      }
    }

    return { backgroundClass, ringClass, textClass };
  };

  const { backgroundClass, ringClass, textClass } = getCharacterStyle();

  return (
    <div className={`py-4 ${backgroundClass}`} style={{ backgroundImage: `url("${characterBackground}")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left' }}>
      <div className="container h-28 mx-auto flex justify-center items-center" >
        <button className={`text-white font-bold text-xl focus:outline-none rounded-full w-10 h-10 hover:h-12 hover:w-12 ${ringClass} mr-10`} onClick={prevSlide}>
          <span className="relative inline-flex w-full h-full">
            <span className="absolute w-full h-full">
              <img src={PanahKiri} alt="Panah Kanan" className="w-full h-full" />
            </span>
          </span>
        </button>
        <div className="flex items-center space-x-4 flex-wrap">{renderCharacterButtons()}</div>
        <button className={`text-white font-bold text-xl focus:outline-none rounded-full w-10 h-10 hover:h-12 hover:w-12 ${ringClass} ml-10`} onClick={nextSlide}>
          <span className="relative inline-flex w-full h-full">
            <span className="absolute w-full h-full">
              <img src={PanahKanan} alt="Panah Kiri" className="w-full h-full" />
            </span>
          </span>
        </button>
      </div>
      <div className="flex justify-center my-4 mt-4">
        <div className={`bg-stone-300 ml-8 mx-1 w-1/4 overflow-hidden rounded-l-lg ${ringClass}`} style={{ minHeight: '650px' }}>
          <div className="h-full flex justify-center items-center">
            <img src={characterPhoto} alt="CharacterPhoto" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className={`w-1/4 bg-stone-300 rounded-r-lg ${ringClass}`} style={{ minHeight: '650px', overflow: 'auto', backgroundColor: 'rgba(204, 204, 209, 0.85)', backgroundImage: `url("${visionBackground}")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
          <div className="h-full w-full">
            <div className={`h-10 flex text-4xl py-10 justify-center items-center font-semibold Genshin-Impact ${textClass}`}>{selectedCharacter === null ? 'Select Character' : characterName}</div>
            {selectedCharacter !== null && (
              <>
                <div className="text-white text-2xl my-4 Genshin-Impact">
                  <div className="flex justify-left pl-6">
                    <div className="text-right pr-2">
                      <div className='text-stone-800'>
                        <div>Vision :</div>
                        <div>Class :</div>
                        <div>Region :</div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className={`${textClass}`}>
                        <div>{characterVision}</div>
                        <div>{characterClass}</div>
                        <div>{characterRegion}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='pt-10 px-4 text-justify Poppins-medium text-stone-900'>{CharacterData[selectedCharacter].CharDescription}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// AboutCharacter.propTypes = {};
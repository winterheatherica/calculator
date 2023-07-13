import React from 'react';
import OurDescription from '../Components/OurDescription';
import KeqingBackground from '../Image/KeqingBackground.jpg';
// import Keqing from '../Image/Keqing.png';
// import Ningguang from '../Image/Ningguang.png';

const About = () => {
  return (
    <div className="flex justify-center items-center h-screen" style={{ backgroundImage: `url(${KeqingBackground})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      <div className="grid grid-cols-2 rounded-lg border-2 border-purple-300" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', width: '1000px' }}>
        <div className="py-10 flex justify-center items-start border-4 border-purple-300">
          <OurDescription
            title="About Us"
            title1="Name"
            title2="Role"
            title3="Description"
            content1="Moderator dxvalv"
            content2="Badut Beneran"
            content3="Mahasiswa tapi bingung"
          />
        </div>
        <div className="py-10 flex justify-center items-start border-4 border-purple-300">
          <OurDescription
            title="About Us"
            title1="Name"
            title2="Role"
            title3="Description"
            content1="Admint Keqing"
            content2="Badut Kalku"
            content3={
              <>
                Mahasiswa yang gemar bermain Genshin Impact <br />
                Waifunya Keqing
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default About;

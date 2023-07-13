import React from 'react';
import OurDescription from '../Components/OurDescription';
import KeqingBackground from '../Image/KeqingBackground.jpg';
import InstagramLogo from '../Image/Instagram-Logo.wine.svg';
import TwitterLogo from '../Image/Twitter-Logo.wine.svg';
import GitHubLogo from '../Image/GitHub-Logo.wine.svg';
// import Keqing from '../Image/Keqing.png';
// import Ningguang from '../Image/Ningguang.png';

const Contact = () => {
  return (
    <div className="flex justify-center items-center h-screen" style={{ backgroundImage: `url(${KeqingBackground})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      <div className="grid grid-cols-2 rounded-lg border-2 border-purple-300" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', width: '1000px' }}>
        <div className="py-10 flex justify-center items-start border-4 border-purple-300">
          <OurDescription
            title="Contact Us"
            title1={
              <div className="flex justify-center items-center">
                <a href="https://www.instagram.com/devalvv/" target="_blank" rel="noopener noreferrer">
                  <img src={InstagramLogo} alt="Instagram" />
                </a>
              </div>
            }
            title2={
              <div className="flex justify-center items-center">
                <a href="https://twitter.com/dxvalv/" target="_blank" rel="noopener noreferrer">
                  <img src={TwitterLogo} alt="Twitter" />
                </a>
              </div>
            }
            title3={
              <div className="flex justify-center items-center">
                <a href="https://github.com/RioBithub/" target="_blank" rel="noopener noreferrer">
                  <img src={GitHubLogo} alt="GitHub" />
                </a>
              </div>
            }
            content1="@devalvv"
            content2="@dxvalv"
            content3="@RioBithub"
          />
        </div>
        <div className="py-10 flex justify-center items-start border-4 border-purple-300">
          <OurDescription
            title="Contact Us"
            title1={
              <div className="flex justify-center items-center">
                <a href="https://www.instagram.com/im_keqing/" target="_blank" rel="noopener noreferrer">
                  <img src={InstagramLogo} alt="Instagram" />
                </a>
              </div>
            }
            title2={
              <div className="flex justify-center items-center">
                <a href="https://twitter.com/winter_heath_/" target="_blank" rel="noopener noreferrer">
                  <img src={TwitterLogo} alt="Twitter" />
                </a>
              </div>
            }
            title3={
              <div className="flex justify-center items-center">
                <a href="https://github.com/winterheeeeath/" target="_blank" rel="noopener noreferrer">
                  <img src={GitHubLogo} alt="GitHub" />
                </a>
              </div>
            }
            content1="@im_keqing"
            content2="@winter_heath_"
            content3="@winterheeeeath"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;

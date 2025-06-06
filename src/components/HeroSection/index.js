import React,  { useEffect, useState }  from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import LogoImage from '../../images/logo.png'
import Typewriter from 'typewriter-effect';
import { fetchBioData } from '../../FirebaseService';

const HeroSection = () => {

    const [bioData, setBioData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);


  useEffect(() => {
    const getBioData = async () => {
      try {
        const data = await fetchBioData();
        setBioData(data); 
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    getBioData();
  }, []);

  if(!bioData){
   return (<div className="loader">Loading...</div>)
  }


    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {bioData.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: bioData.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{bioData.description}</SubTitle>
                        <ResumeButton href={bioData.resume} target='display'>Check Resume</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={LogoImage} alt="Logo-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection
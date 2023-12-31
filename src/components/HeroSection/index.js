import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {

    const resumebtn = ()=>{
        const pdfPath = 'Sagar-Kadam-Resume.pdf';
        window.open(pdfPath,'_blank');
        const downloadLink = document.createElement('a');
        downloadLink.href = pdfPath;
        downloadLink.download = 'Sagar-Kadam-Resume.pdf';
        downloadLink.click();
        }

    return (
        <div>
            <HeroContainer >
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer id="home">
                    <HeroLeftContainer id="Left">
                        <Title id='user-detail-name'>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle id="user-detail-intro">{Bio.description}</SubTitle>
                        <ResumeButton  onClick={resumebtn} target='display' id='resume-button-2'>Check Resume</ResumeButton>
                    </HeroLeftContainer>
                    <HeroRightContainer id="Right">
                        <Img className='home-img' src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default HeroSection
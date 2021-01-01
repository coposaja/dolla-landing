import React, { useState } from 'react';
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements';
import Video from '../../assets/videos/video.mp4';
import { Button } from '../ButtonElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={Video}
          type='video/mp4'
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>Sign up for a new account today and receive 250% in credit towards your next payment.</HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            primary='true'
            dark='true'
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;

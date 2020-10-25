import React from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1} from './HeroElements'
import HeroVid from '../../videos/finance.mp4'




const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={HeroVid} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual BitCoin Made Easy!</HeroH1>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

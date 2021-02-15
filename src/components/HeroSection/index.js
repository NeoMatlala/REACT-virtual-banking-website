import React, {useState} from 'react'
import Video from '../../video/video.mp4'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'
import {Button} from '../ButtonElement'

const HeroSection = () => {

    // Hero button Arrow hover
    const [hover, setHover] = useState(false)

    // Arrow hover function
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <VideoBg muted autoplay loop src={Video} type='video/mp4'/>
                </HeroBg>

                <HeroContent>
                    <HeroH1>
                        Online Banking Made Easy
                    </HeroH1>
                    <HeroP>
                        Sign up for a new account today and receive R2000 on credit towards your next payment.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to='home'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true'
                         offset={-80}>
                            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection

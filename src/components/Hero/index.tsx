import React from 'react'
import {
  HeroContainer,
  HeroOverlay,
  HeroContent,
  HeroTitle
} from './heroStyled'

const Hero = () => (
  <HeroContainer>
    <div className="container">
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </div>
    <HeroOverlay />
  </HeroContainer>
)

export default Hero

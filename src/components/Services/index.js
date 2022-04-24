import React from 'react'
import Icon1 from '../../images/friendship.svg'
import Icon2 from '../../images/people.svg'
import Icon3 from '../../images/remote.svg'

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="summary">
      <ServicesH1> Quick Look </ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2> Sessions </ServicesH2>
          <ServicesP> Short, regular sessions that deliver clarity and tranquility.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2> The Theory </ServicesH2>
          <ServicesP> Focus efficiently by hacking your own mind.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2> Commitment to Flexibility </ServicesH2>
          <ServicesP> Have your sessions remotely, or in-person. Eventually, in-spirit. </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services

import React from 'react'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1> Our Services </ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2> Reduce Expenses </ServicesH2>
          <ServicesP> We Help You</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2> Reduce Expenses </ServicesH2>
          <ServicesP> We Help You</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2> Reduce Expenses </ServicesH2>
          <ServicesP> We Help You</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services

import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Real Links</FooterLinkTitle>
                <FooterLink href="https://github.com/sachimp" target="_blank">My GitHub</FooterLink>
                <FooterLink href="https://www.linkedin.com/in/sachin-gandhi9001/" target="_blank">My LinkedIn</FooterLink>
                <FooterLink>My Portfolio Site (WIP)</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
                <FooterLink>Careers</FooterLink>
                <FooterLink>Terms of Service</FooterLink>
                <FooterLink>Something Important</FooterLink>
                <FooterLink>Something Pointless</FooterLink>
                <FooterLink>Interesting Words</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Policy</FooterLinkTitle>
                <FooterLink>Animal Policy</FooterLink>
                <FooterLink>Human Policy</FooterLink>
                <FooterLink>Gamers Policy</FooterLink>
                <FooterLink>Policy Policy</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> One More Section</FooterLinkTitle>
                <FooterLink>Careers</FooterLink>
                <FooterLink>Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer

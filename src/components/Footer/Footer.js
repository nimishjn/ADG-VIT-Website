import React from "react";

import AdgLogo from "./assets/adglogo.png";
import {
  AdgLogoWrap,
  BottomText,
  CopyrightWrap,
  Description,
  FollowUsHeader,
  FollowUsWrap,
  FooterContainer,
  FooterDescriptionWrap,
  FooterLink,
  HandleLink,
  HandleLinksWrap,
  HorizontalLine,
  LinksWrap,
  QuickLinksHeader,
  QuickLinksWrap,
  TopButton,
} from "./FooterElements";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaTwitter,
} from "react-icons/fa";

import { MdKeyboardArrowUp } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterDescriptionWrap>
          <AdgLogoWrap>
            <img src={AdgLogo} alt="ADG Logo" />
          </AdgLogoWrap>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Description>
        </FooterDescriptionWrap>
        <QuickLinksWrap>
          <QuickLinksHeader>Quick Links</QuickLinksHeader>
          <LinksWrap>
            <FooterLink to="/events">Events</FooterLink>
            <FooterLink to="/team">Team</FooterLink>
            <FooterLink to="/projects">Projects</FooterLink>
            <FooterLink to="/">Contact Us</FooterLink>
            <FooterLink to="/domains">Domains</FooterLink>
            <FooterLink to="/">About Us</FooterLink>
            <FooterLink to="/partners">Partners</FooterLink>
          </LinksWrap>
        </QuickLinksWrap>
        <FollowUsWrap>
          <FollowUsHeader>Follow Us</FollowUsHeader>
          <HandleLinksWrap>
            <HandleLink href="https://www.facebook.com/vitios/" target="_blank">
              <FaFacebook />
            </HandleLink>
            <HandleLink href="https://www.linkedin.com/company/adgvit/" target="_blank">
              <FaLinkedin />
            </HandleLink>
            <HandleLink href="https://www.instagram.com/adgvit/" target="_blank">
              <FaInstagram />
            </HandleLink>
            <HandleLink href="https://twitter.com/adgvit" target="_blank">
              <FaTwitter />
            </HandleLink>
            <HandleLink href="https://medium.com/adg-vit" target="_blank">
              <FaMedium />
            </HandleLink>
            <HandleLink href="https://github.com/ADG-VIT" target="_blank">
              <FaGithub />
            </HandleLink>
          </HandleLinksWrap>
        </FollowUsWrap>
        <CopyrightWrap>
            <HorizontalLine />
            <BottomText>Developed by ADG | © 2021 All rights reserved.</BottomText>
        </CopyrightWrap>
        <TopButton href="">
            <MdKeyboardArrowUp />
        </TopButton>
      </FooterContainer>
    </>
  );
};

export default Footer;

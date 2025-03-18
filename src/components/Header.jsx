import React from 'react';
import styled from 'styled-components';
import menuIcon from '../assets/icons/menu-icon.svg';
import avatarImg from '../assets/images/avatar.png';

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <HeaderContent>
          <Logo>
            <LogoText>FigmaPages</LogoText>
            <CreatorInfo>
              <ByText>by</ByText>
              <Avatar />
              <CreatorName>Vkayhere</CreatorName>
              
            </CreatorInfo>
          </Logo>
          
          <RightSection>
            
            
            <LoginLink>Login</LoginLink>
            <GetProButton>
              <MenuIcon src={menuIcon} alt="Menu" />
              <span>Get Pro</span>
            </GetProButton>
          </RightSection>
        </HeaderContent>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: var(--white);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const LogoText = styled.h1`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 0;
  color: var(--text-color);
  font-family: 'Inter', sans-serif;
`;

const CreatorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ByText = styled.span`
  font-size: 14px;
  font-weight: 500;
  opacity: 0.5;
  color: var(--text-color);
  font-family: 'Inter', sans-serif;
`;

const CreatorName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color);
  font-family: 'Inter', sans-serif;
`;

const Avatar = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-image: url(${avatarImg});
  background-size: cover;
  margin-left: 5px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const GetProButton = styled.button`
  background-color: #242323;
  color: var(--white);
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  
  &:hover {
    background-color: #333;
  }
`;

const MenuIcon = styled.img`
  width: 14px;
  height: 14px;
`;

const LoginLink = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: var(--text-color);
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  
  &:hover {
    opacity: 0.8;
  }
`;

export default Header; 
import React, { useState } from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const DesignCard = ({ design, onCardClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation(); // Prevent card click when copy button is clicked
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleCardClick = () => {
    onCardClick(design);
  };

  return (
    <CardContainer 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      isHovered={isHovered}
      onClick={handleCardClick}
    >
      <DesignPreview>
        <DesignImage src={design.image} alt={design.name} />
        {isHovered && (
          <HoverOverlay>
            <ButtonsContainer>
              <CopyButton onClick={(e) => e.stopPropagation()}>
                <CopyToClipboard text={design.svg} onCopy={handleCopy}>
                  <CopyButtonContent>
                    <CopyIcon>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </CopyIcon>
                    <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                  </CopyButtonContent>
                </CopyToClipboard>
              </CopyButton>
              <PreviewButton onClick={(e) => {
                e.stopPropagation();
                onCardClick(design);
              }}>
                <PreviewIcon>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </PreviewIcon>
                <span>Preview</span>
              </PreviewButton>
            </ButtonsContainer>
          </HoverOverlay>
        )}
      </DesignPreview>
      
      <DesignTitle>{design.name}</DesignTitle>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgba(217, 217, 217, 0.1);
  border: 1px solid #B4B4B4;
  transition: box-shadow 0.3s ease;
  ${props => props.isHovered && `
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.2), 0px 20px 35px 0px rgba(0, 0, 0, 0.05);
  `}
`;

const DesignPreview = styled.div`
  position: relative;
  background-color: white;
  border-radius: 4px;
  margin: 10px;
  overflow: hidden;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #FFFFFF;
`;

const DesignImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 10px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const CopyButton = styled.div`
  background-color: #242323;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 1), 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-2px);
  }
`;

const CopyButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: white;
  white-space: nowrap;
`;

const CopyIcon = styled.div`
  display: flex;
  align-items: center;
`;

const PreviewButton = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid black;
  display: flex;
  align-items: center;
  gap: 5px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-2px);
  }
`;

const PreviewIcon = styled.div`
  display: flex;
  align-items: center;
`;

const DesignTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-color);
  margin: 0 10px 10px 10px;
  text-align: center;
`;

export default DesignCard; 
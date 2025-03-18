import React, { useState } from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const DesignCard = ({ design }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <CardContainer 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <DesignPreview>
        <DesignImage src={design.image} alt={design.name} />
        {isHovered && (
          <CopyButton>
            <CopyToClipboard text={design.svg} onCopy={handleCopy}>
              <CopyText>{isCopied ? 'Copied!' : 'Copy'}</CopyText>
            </CopyToClipboard>
          </CopyButton>
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

const CopyButton = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: white;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
`;

const CopyText = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: black;
  white-space: nowrap;
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
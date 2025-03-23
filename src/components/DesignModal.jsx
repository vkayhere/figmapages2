import React from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const DesignModal = ({ design, onClose, onCopy }) => {
  if (!design) return null;

  return (
    <ModalOverlay>
      <ModalBackground onClick={onClose} />
      <ModalContent>
        <ModalCard>
          <DesignHeader>
            <DesignTitle>{design.name}</DesignTitle>
            <DesignDescription>{design.description}</DesignDescription>
          </DesignHeader>

          <TagsContainer>
            {design.tags.map(tag => (
              <TagButton key={tag} active={tag === 'Web' || tag === 'Saas'}>
                {tag}
              </TagButton>
            ))}
          </TagsContainer>
          
          <DesignPreview>
            <div dangerouslySetInnerHTML={{ __html: design.svg }} />
          </DesignPreview>
          
          <CopyToClipboard text={design.svg} onCopy={onCopy}>
            <CopyButton>
              <CopyIcon>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </CopyIcon>
              <span>Copy to Clipboard</span>
            </CopyButton>
          </CopyToClipboard>
        </ModalCard>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
`;

const ModalContent = styled.div`
  position: relative;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  z-index: 1001;
  overflow: auto;
`;

const ModalCard = styled.div`
  background-color: white;
  border: 1px solid #DADADA;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const DesignHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const DesignTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 20px;
  margin: 0;
  color: #000000;
`;

const DesignDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  margin: 0;
  color: #000000;
  opacity: 0.8;
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const TagButton = styled.div`
  background-color: ${props => props.active ? '#000000' : 'white'};
  color: ${props => props.active ? 'white' : '#3C3C3C'};
  border: ${props => props.active ? 'none' : '1px solid #D2D2D2'};
  border-radius: 100px;
  padding: 4px 10px;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DesignPreview = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #FAFAFA;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  
  svg {
    max-width: 100%;
    height: auto;
  }
`;

const CopyButton = styled.button`
  background-color: #242323;
  border-radius: 4px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 1), 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
  align-self: flex-start;

  &:hover {
    transform: translateY(-2px);
  }
`;

const CopyIcon = styled.div`
  display: flex;
  align-items: center;
`;

export default DesignModal; 
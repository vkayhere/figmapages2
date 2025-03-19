import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import DesignCard from './components/DesignCard';
import DesignModal from './components/DesignModal';
import { designsData } from './data/designs';
import searchIcon from './assets/icons/search-icon.svg';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('Web');
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [isCopied, setIsCopied] = useState(false);
  
  const filteredDesigns = designsData.filter(design => {
    const matchesSearch = design.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = activeTag === 'All' || design.tags.includes(activeTag);
    return matchesSearch && matchesTag;
  });

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCardClick = (design) => {
    setSelectedDesign(design);
  };

  const handleCloseModal = () => {
    setSelectedDesign(null);
  };

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <AppContainer>
      <Header />
      
      <MainContent>
        <div className="container">
          <HeroSection>
            <HeroRectangle>
              <HeroText>
                Free top quality Figma designs. No Auto Layouts. Just raw designs for you to play with. Hire me for work
              </HeroText>
            </HeroRectangle>
          </HeroSection>
          
          <SearchSection>
            <LeftGroup>
              <SearchBox>
                <SearchInput 
                  type="text" 
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearch}
                />
                <SearchIcon>
                  <img src={searchIcon} alt="Search" width="18" height="18" />
                </SearchIcon>
              </SearchBox>
              
              <FilterTags>
                {['Web', 'Mobile', 'AI', 'Saas', 'Landing Page', 'Free', 'Pro'].map(tag => (
                  <TagButton 
                    key={tag}
                    active={activeTag === tag}
                    onClick={() => setActiveTag(tag)}
                  >
                    {tag}
                  </TagButton>
                ))}
              </FilterTags>
            </LeftGroup>
            
            <StatCounter>
              <span>500 Components. Last Updated on 11 Mar, 2025</span>
              <GreenDot />
            </StatCounter>
          </SearchSection>
          
          <CardsGrid>
            {filteredDesigns.map(design => (
              <DesignCard 
                key={design.id} 
                design={design}
                onCardClick={handleCardClick}
              />
            ))}
          </CardsGrid>
        </div>
      </MainContent>

      {selectedDesign && (
        <DesignModal 
          design={selectedDesign}
          onClose={handleCloseModal}
          onCopy={handleCopy}
        />
      )}
    </AppContainer>
  );
};

const AppContainer = styled.div`
  background-color: white;
  min-height: 100vh;
`;

const MainContent = styled.main`
  padding: 0px 0;
`;

const HeroSection = styled.section`
  margin-bottom: 40px;
`;

const HeroRectangle = styled.div`
  background-color: #1541E3;
  border-radius: 0px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroText = styled.p`
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  max-width: 100%;
  text-align: center;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 100%) {
    white-space: normal;
    max-width: 600px;
  }
`;

const SearchSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (max-width: 100%) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;

const SearchBox = styled.div`
  position: relative;
  width: 300px;
  
  @media (max-width: 100%) {
    width: 100%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid var(--light-gray);
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  
  &::placeholder {
    color: var(--text-color);
    opacity: 0.5;
  }
  
  &:focus {
    outline: none;
    border-color: #1541E3;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.5;
`;

const StatCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #656565;
  font-family: 'Inter', sans-serif;
`;

const GreenDot = styled.div`
  width: 8px;
  height: 8px;
  background-color: #10D233;
  border-radius: 50%;
`;

const FilterTags = styled.div`
  display: flex;
  gap: 10px;
  white-space: nowrap;
  overflow-x: auto;
  padding-bottom: 5px;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const TagButton = styled.button`
  background-color: ${props => props.active ? '#000000' : 'white'};
  color: ${props => props.active ? 'white' : '#3C3C3C'};
  border: ${props => props.active ? 'none' : '1px solid #D2D2D2'};
  border-radius: 100px;
  padding: 4px 10px;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export default App; 
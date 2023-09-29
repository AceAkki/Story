import React from 'react';
import styled from 'styled-components';

const StoryContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

const StoryText = styled.p`
  font-size: 18px;
`;

const ActionButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const GeneratedStoryDisplay = ({ story, onSave, onShare }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Generated Story',
          text: story,
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Sharing failed:', error));
    } else {
      console.warn('Web Share API not supported in this browser.');
    }
  };

  return (
    <StoryContainer>
      <h2>Generated Story</h2>
      <StoryText>{story}</StoryText>
      <ActionButton onClick={onSave}>Save</ActionButton>
      <ActionButton onClick={handleShare}>Share</ActionButton>
    </StoryContainer>
  );
};

export default GeneratedStoryDisplay;

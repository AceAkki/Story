import React from 'react';
import styled from 'styled-components';

const LeaderboardContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

const LeaderboardTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const StoryItem = styled.li`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StoryPrompt = styled.p`
  font-size: 16px;
  flex-grow: 1;
`;

const UpvoteButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Leaderboard = ({ stories, onVote }) => {
  return (
    <LeaderboardContainer>
      <LeaderboardTitle>Leaderboard</LeaderboardTitle>
      <ul>
        {stories.map((story) => (
          <StoryItem key={story.id}>
            <StoryPrompt>{story.prompt}</StoryPrompt>
            <UpvoteButton onClick={() => onVote(story.id)}>Upvote</UpvoteButton>
          </StoryItem>
        ))}
      </ul>
    </LeaderboardContainer>
  );
};

export default Leaderboard;

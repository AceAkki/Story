import React, { useState, useEffect } from 'react';
import StoryPromptForm from './StoryPromptForm';
import GeneratedStoryDisplay from './GeneratedStoryDisplay';
import Leaderboard from './Leaderboard';
import styled from 'styled-components';

import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Navigation from './Navigation';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const App = () => {
  const [generatedStory, setGeneratedStory] = useState('');
  const [savedStories, setSavedStories] = useState([]);
  const [leaderboardStories, setLeaderboardStories] = useState([]);

  useEffect(() => {
    // Load saved stories from local storage when the component mounts
    const savedStoriesFromLocalStorage = JSON.parse(
      localStorage.getItem('savedStories') || '[]'
    );
    setSavedStories(savedStoriesFromLocalStorage);

    // Load leaderboard stories (replace with API call to get leaderboard data)
    const leaderboardData = [
      { id: 1, prompt: 'Once upon a time...', text: 'Lorem ipsum dolor sit amet...' },
      { id: 2, prompt: 'In a city where everyone can fly...', text: 'Consectetur adipiscing elit...' },
      // Add more leaderboard stories here
    ];
    setLeaderboardStories(leaderboardData);
  }, []);

  const handleSubmit = async (prompt) => {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `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`, // Replace with your API key
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate the story');
      }

      const data = await response.json();
      const newStory = data.choices[0].text;

      // Update the state with the generated story
      setGeneratedStory(newStory);

      // Save the generated story to local storage
      const updatedSavedStories = [...savedStories, newStory];
      setSavedStories(updatedSavedStories);
      localStorage.setItem('savedStories', JSON.stringify(updatedSavedStories));
    } catch (error) {
      console.error(error);
    }
  };

  const handleVote = (storyId) => {
    // Implement your voting logic here (e.g., sending a vote to your server)
    console.log(`Voted for story with ID ${storyId}`);
  };

  return (
    <Container>

<Router>
      <div>
        <h1>Story Prompt Generator</h1>
        <Navigation />
        <Routes>
          <Route path="/" element={<StoryPromptForm />} />
          <Route path="/story" element={<GeneratedStoryDisplay />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          {/* Redirect to the home page if the path doesn't match any route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>

    
        <StoryPromptForm onSubmit={handleSubmit} />
      {generatedStory && (
        <GeneratedStoryDisplay
          story={generatedStory}
          onSave={() => {} /* Implement save functionality */}
          onShare={() => {} /* Implement share functionality */}
        />
      )}

      <h2>Saved Stories</h2>
      <ul>
        {savedStories.map((savedStory, index) => (
          <li key={index}>{savedStory}</li>
        ))}
      </ul>

      <Leaderboard stories={leaderboardStories} onVote={handleVote} />
    </Container>
  );
};


export default App;





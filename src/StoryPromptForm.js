import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const StoryPromptForm = ({ onSubmit }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(prompt);
    setPrompt('');
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormLabel>Story Prompt:</FormLabel>
        <FormInput
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <FormButton type="submit">Generate Story</FormButton>
      </form>
    </FormContainer>
  );
};

export default StoryPromptForm;





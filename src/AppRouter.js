import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StoryPromptForm from './StoryPromptForm';
import GeneratedStoryDisplay from './GeneratedStoryDisplay';
import Leaderboard from './Leaderboard';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={StoryPromptForm} />
        <Route path="/story" component={GeneratedStoryDisplay} />
        <Route path="/leaderboard" component={Leaderboard} />
      </Switch>
    </Router>
  );
};

export default AppRouter;

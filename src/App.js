import React, { useState } from 'react';
import { Game } from './components/Game/Game';
import { WelcomeBack } from './components/WelcomeBack/WelcomeBack';
import { useGameOpenedAfterOffline } from './hooks/useGameOpenedAfterOffline';

export const App = () => {
  const [isWelcomeBackClosed, setIsWelcomeBackClosed] = useState(false);
  const {
    offlineTime,
    earnedSum,
    isGameOpenedAfterOffline,
  } = useGameOpenedAfterOffline();

  if (isGameOpenedAfterOffline && !isWelcomeBackClosed) {
    return <WelcomeBack offlineTime={offlineTime} earnedSum={earnedSum} setIsWelcomeBackClosed={setIsWelcomeBackClosed} />;
  }

  return <Game />;
};

import React, { useEffect } from "react";
import useStore from "./useStore";
import GlobalStyle from "./components-styled/GlobalStyle";
import MemoryCards from "./components/MemoryCards";
import GameBoard from "./components-styled/GameBoard.styled";
import Scorings from "./components/Scorings";

export default function App() {
  const gameState = useStore((state) => state.gameState);

  // Initially double each Object in the cards array and shuffle
  useEffect(() => {
    useStore.getState().doubleAndShuffleCards();
  }, []);

  // Whenever two moves were made, check if the cards match
  useEffect(() => {
    gameState.move === 2 && useStore.getState().checkMatch();
  }, [gameState.move]);

  // Reset cards on "no match" or mark cards on "match"
  useEffect(() => {
    gameState.match === "match" && useStore.getState().setMatchedCards();
    gameState.match === "no match" &&
      setTimeout(useStore.getState().resetCards, 2000);
  }, [gameState.match]);

  return (
    <>
      <h1>memory apparillo.</h1>
      <GlobalStyle />
      <Scorings />
      <GameBoard>
        <MemoryCards />
      </GameBoard>
    </>
  );
}

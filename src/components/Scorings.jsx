import React from "react";
import useStore from "../useStore";
import styled from "styled-components";

export default function Scorings() {
  const gameState = useStore((state) => state.gameState);
  return (
    <>
      <Score>score: {gameState.score}</Score> <br />
      <Fails>fails: {gameState.fails}</Fails>
    </>
  );
}

const Score = styled.span`
  font-size: 1.5rem;
  margin-bottom: -15px;
`;

const Fails = styled.span`
  font-size: 1rem;
`;

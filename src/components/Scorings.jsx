import React from "react";
import useStore from "../useStore";

export default function Scorings() {
  const gameState = useStore((state) => state.gameState);
  return (
    <>
      <span style={{ fontSize: "1.5rem", marginBottom: "-15px" }}>
        score: {gameState.score}
      </span>
      <br />
      fails: {gameState.fails}
    </>
  );
}

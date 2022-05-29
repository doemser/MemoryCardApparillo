import styled from "styled-components";

const GameBoard = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, auto);
  justify-items: center;
  margin-top: 10px;
  border-radius: 5px;
  max-width: 500px;
`;

export default GameBoard;

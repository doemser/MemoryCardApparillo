import styled from "styled-components";

export const MemoryCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  position: relative;
  width: 100px;
  height: 75px;
`;

export const Frontside = styled(MemoryCard)`
  position: absolute;
  backface-visibility: hidden;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  transform: rotate3d(
    0,
    1,
    0,
    ${({ flipped }) => (flipped ? "0deg" : "-180deg")}
  );
  box-shadow: 0 0 10px 0
    ${({ matched }) => (matched ? "var(--color-matched)" : "var(--color-dark)")};
  border-radius: 6px;
`;

export const Backside = styled(Frontside)`
  background: var(--color-dark);
  transform: rotate3d(
    0,
    1,
    0,
    ${({ flipped }) => (flipped ? "-180deg" : "0deg")}
  );
`;

import useStore from "../useStore";
import SVGIcon from "./SVGIcon";
import {
  MemoryCard,
  Frontside,
  Backside
} from "../components-styled/MemoryCard.styled";

export default function MemoryCards() {
  const cards = useStore((state) => state.cards);
  const gameState = useStore((state) => state.gameState);
  const flipCard = useStore((state) => state.flipCard);

  return (
    <>
      {cards.map((card) => {
        return (
          <MemoryCard
            key={card.id}
            onClick={() => {
              !card.flipped &&
                gameState.move < 2 &&
                flipCard(card.id, card.name);
            }}
          >
            <Frontside flipped={card.flipped} matched={card.matched}>
              <SVGIcon
                variant={card.name}
                color={card.matched && "var(--color-matched)"}
              />
            </Frontside>
            <Backside flipped={card.flipped} matched={card.matched}>
              <SVGIcon color="var(--color-accent)" />
            </Backside>
          </MemoryCard>
        );
      })}
    </>
  );
}

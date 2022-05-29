import create from "zustand";
import { nanoid } from "nanoid";
import produce from "immer";
import cards from "./db/cards";

const useStore = create((set) => {
  return {
    gameState: {
      mode: "chosing",
      move: 0,
      cards: {
        "1": "first not selected",
        "2": "second not selected"
      },
      fails: 0,
      score: 0,
      match: null
    },
    cards: [],
    doubleAndShuffleCards: () => {
      set({
        cards: [
          ...cards,
          ...cards.map((card) => {
            return { ...card, id: nanoid() };
          })
        ]
      });
      set(
        produce((draft) => {
          // Durstenfeld shuffle
          for (var i = draft.cards.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = draft.cards[i];
            draft.cards[i] = draft.cards[j];
            draft.cards[j] = temp;
          }
        })
      );
    },
    flipCard: (id, name) => {
      set((state) => {
        return {
          cards: state.cards.map((card) => {
            return card.id === id ? { ...card, flipped: !card.flipped } : card;
          }),

          gameState: {
            ...state.gameState,
            move: state.gameState.move + 1,
            cards: {
              ...state.gameState.cards,
              [`${state.gameState.move + 1}`]: name
            }
          }
        };
      });
    },
    checkMatch: () => {
      set((state) => {
        return {
          gameState: {
            ...state.gameState,
            mode: "checking",
            match:
              state.gameState.cards["1"] === state.gameState.cards["2"]
                ? "match"
                : "no match"
          }
        };
      });
    },
    setMatchedCards: () => {
      set((state) => {
        return {
          cards: state.cards.map((card) =>
            card.name === state.gameState.cards["1"]
              ? { ...card, matched: true }
              : card
          ),

          gameState: {
            ...state.gameState,
            mode: "chosing",
            move: 0,
            cards: {
              "1": "first not selected",
              "2": "second not selected"
            },
            score: state.gameState.score + 1000,
            match: null
          }
        };
      });
    },
    resetCards: () => {
      set((state) => {
        return {
          cards: state.cards.map((card) => {
            return card.matched ? card : { ...card, flipped: false };
          }),

          gameState: {
            mode: "chosing",
            move: 0,
            cards: {
              "1": "first not selected",
              "2": "second not selected"
            },
            fails: state.gameState.fails + 1,
            score: state.gameState.score - 100,
            match: null
          }
        };
      });
    }
  };
});

export default useStore;

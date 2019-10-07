/*
  To faro shuffle a deck of playing cards is to split the deck exactly in half, then perfectly interweave the cards, such that the original top and bottom cards are unchanged.
  Write a function that accepts a even-numbered list and faro shuffles the indices.
  Example
  Faro shuffling the list: ['ace', 'two', 'three', 'four', 'five', 'six']
  will give ['ace', 'four', 'two', 'five', 'three', 'six']
*/

const faroShuffle = (cards) => cards.slice(0, (cards.length/2))
                                    .flatMap((card, index) => [card, cards[index + (cards.length / 2)]]);

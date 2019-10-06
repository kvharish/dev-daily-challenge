/*
  You've just finished writing the last chapter for your novel when a virus suddenly infects your document.
  It has swapped the 'i's and 'e's in 'ei' words and capitalized random letters.
  In today's challenge, you will write a function which will:
    a) remove the spelling errors in 'ei' words. (Example of 'ei' words: their, caffeine, deceive, weight)
    b) only capitalise the first letter of each sentence. Make sure the rest of the sentence is in lower case.
  Example: He haD iEght ShOTs of CAffIEne. => He had eight shots of caffeine.
*/

const cleanVirus = (sentence) => sentence.charAt(0).toUpperCase() + sentence.toLowerCase()
                                         .replace(/ie/g, 'ei')
                                         .replace(/[.+]\s\w/g, (str) => `. ${str[str.length -1].toUpperCase()}`)
                                         .slice(1);

// Note:
// If a word contains a valid "ie" string, it will be transformed into "ei" incorrectly.
// Also, if our sentence contains nouns, we will loose the uppercase.

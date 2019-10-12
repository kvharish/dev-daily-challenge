/*
  Ninjas frequently need to signal each other in code.
  They often employ natural sounds as cover.
  Our ninja will chirp like a bird, with different amounts of chirps signifying different messages.
  chirp(4);
  //output would be chirp-chirp-chirp-chirp.
  Consider String.prototype.repeat,String.prototype.padStart, and String.prototype.padEnd disabled for this challenge, you'll have to think recursively to avoid detection.
*/

const chirp = (count = 1) => Array(count).fill('chirp').join('-');

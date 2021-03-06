/*
  A Caesar cipher, or a shift cipher, is one of the most well known encryption techniques.
  It works by substituting the letters in the message with letters some fixed number of positions down the alphabet.
  Your challenge is to write a function that will accept a string and a shift key.
  It will return the encrypted text.
  If something in the string is not in the alphabet (e.g. punctuation, spaces) leave it as is.
  key: 1
  plain: defend the east wall of the castle
  cipher: efgfoe uif fbtu xbmm pg uif dbtumf
*/

const encode = (sentence, key) => sentence.split(' ')
                                          .map((word) => word.split('')
                                          .map((char) => (/[a-z]/i.test(char)) ? String.fromCharCode(char.charCodeAt(0) + key) : char)
                                          .join(''))
                                          .join(' ');
                                          

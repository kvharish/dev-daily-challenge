/*
  Your task is to return a string that displays a diamond shape on the screen using asterisk (“*”) characters.
  The shape that the print method will return should resemble a diamond.
  A number provided as input will represent the number of asterisks printed on the middle line.
  The line above and below will be centered and will have two less asterisks than the middle line.
  This reduction will continue for each line until a line with a single asterisk is printed at the top and bottom of the figure.
  Return null if input is an even number or a negative number.
  Note: JS and Python students must implement diamond() method and return None (Py) or null(JS) for invalid input.
*/

const padSpaceToSides = (str, len) => {
        const padlen = len - str.length,
          right = Math.ceil( padlen / 2 ),
          left = padlen - right;
        return str = Array(left+1).join(' ') + str + Array(right+1).join(' ');
      },
      diamondTopFormation = (end, atom) => {
        const start = 1, step = 2;
        for(let i = start; i < end; i += step) {
          console.log(padSpaceToSides(atom.repeat(i), end));
        }
      },
      diamondBottomFormation = (start, atom) => {
        const end = 1, step = 2;
        for(let i = start; i >= end; i -= step) {
          console.log(padSpaceToSides(atom.repeat(i), start));
        }
      },
      diamond = (height, atom = '*') => {
        if(height % 2 === 0 || height < 0) {
          return null;
        }
        diamondTopFormation(height, atom);
        diamondBottomFormation(height, atom);
      };

diamond(5);

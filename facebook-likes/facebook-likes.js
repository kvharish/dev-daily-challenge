/*
  create a like system from Facebook; a text which displays the names of people who liked an item.
  For example:
  likes [] must be "no one likes this"
  likes ["Peter"] must be "Peter likes this"
  likes ["Jacob", "Alex"] must be "Jacob and Alex like this"
  likes ["Max", "John", "Mark"] must be "Max, John and Mark like this"
  likes ["Alex", "Jacob", "Mark", "Max"] must be "Alex, Jacob and 2 others like this"
  Note: For 4 or more names, the number in and 2 others simply increases.
*/

const displayLikes = (likes) => {
  let msg = 'no one likes this'
  switch(likes.length) {
    case 1:
      msg = `${likes[0]} likes this`;
      break;
    case 2:
      msg = `${likes[0]} and ${likes[1]} likes this`;
      break;
    case 3:
      msg = `${likes[0]}, ${likes[1]} and ${likes[2]} likes this`;
      break;
    default:
      msg = `${likes[0]}, ${likes[1]} and ${likes.length - 2} others likes this`;
      break;
  }
  return msg;
};

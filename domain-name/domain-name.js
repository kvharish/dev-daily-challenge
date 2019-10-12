/*
  Write a function that, when given a URL as a string, returns only the domain name as a string.
  domainName(https://twitter.com/explore) == "twitter"
  domainName(https://github.com/thepracticaldev/dev.to) == "github"
  domainName(https://www.youtube.com) == "youtube"
*/

const domainName = (url) => {
  const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  return (match && match.length > 2 && typeof match[2] === 'string' && match[2].length) ? match[2].split('.')[0] : null;
}

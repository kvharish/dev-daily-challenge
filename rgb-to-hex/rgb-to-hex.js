/*
  This rgb function is incomplete.
  Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.
  Valid decimal values for RGB are 0 - 255.
  Any values that fall out of that range must be rounded to the closest valid value.

  The following are examples of expected output values:

  rgb(255, 255, 255) # returns FFFFFF
  rgb(255, 255, 300) # returns FFFFFF
  rgb(0,0,0) # returns 000000
  rgb(148, 0, 211) # returns 9400D3
*/

const toHex = (c) => {
  const hex = Math.max(0, Math.min(255, c)).toString(16);
  return hex.length == 1 ? `0${hex}` : hex;
};

const rgb = (r, g, b) => {
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

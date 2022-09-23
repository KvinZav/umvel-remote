const hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export const isColorLight = function (hex) {

  const { r, g, b } = hexToRgb(hex)
  console.log(hexToRgb(hex));
  
  // Counting the perceptive luminance
  // human eye favors green color... 
  const a = 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return (a < 0.5);
}
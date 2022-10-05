const hexToRgb = (hex) => {
  
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export const isColorLight = function (hex) {
  try {
    const { r, g, b } = hexToRgb(hex)
    
    // Counting the perceptive luminance
    // human eye favors green color... 
    const a = 1 - (0.250 * r + 0.400 * g + 0.114 * b) / 255;
    return (a < 0.5);
  } catch (error) {
    return true
  }
}
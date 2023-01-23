/**
 * Function to decode the value of a color code.
 * @param color An array of 2 string elements representing the color codes
 * @returns The decimal equivalent of the color code
 */
export function decodedValue(color: string[]): number {
  // Check if the input array is valid
  if (!color || color.length < 2) {
    throw new Error("Invalid input: expected an array of 2 elements");
  }

  // Define a lookup table for the color codes
  const colorCodes: any = {
    black: "0",
    brown: "1",
    red: "2",
    orange: "3",
    yellow: "4",
    green: "5",
    blue: "6",
    violet: "7",
    grey: "8",
    white: "9",
  };

  // Get the first and second color codes
  const firstColor = colorCodes[color[0].toLowerCase()];
  const secondColor = colorCodes[color[1].toLowerCase()];

  // Check if the color codes are valid
  if (!firstColor || !secondColor) {
    throw new Error("Invalid color code");
  }

  // Concatenate the color codes and parse the result to an integer
  const colorCode = parseInt(firstColor + secondColor);

  // Check if the parsed value is a valid number
  if (isNaN(colorCode)) {
    throw new Error("Invalid color code");
  }

  return colorCode;
}

export function decodedResistorValue(color: string[]): string {
  // Check if the input array is valid
  if (!color || color.length < 3) {
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
  let secondColor = colorCodes[color[1].toLowerCase()];
  let thirdColor = colorCodes[color[2].toLowerCase()];

  // Check if the color codes are valid
  if (!firstColor || !secondColor || !thirdColor) {
    throw new Error("Invalid color code");
  }

  if (secondColor == "0" && thirdColor == "2") {
    secondColor = "";
  }

  switch (parseInt(thirdColor)) {
    case 0:
      thirdColor = " ohms";
      break;
    case 1:
      thirdColor = "0 ohms";
      break;
    default:
      let count: number;
      if (thirdColor <= 3) {
        count = 0;
      } else {
        count = parseInt(thirdColor) - 3;
      }

      thirdColor = "";
      for (let i = 0; i < count; i++) {
        thirdColor += "0";
      }
      thirdColor += " kiloohms";

      break;
  }

  // Concatenate the color codes
  const colorCode = firstColor + secondColor + thirdColor;

  return colorCode;
}

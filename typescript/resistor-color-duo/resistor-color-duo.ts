export function decodedValue(color: string[]): number {
  let firstColor;
  let secondColor;

  console.log(color);

  switch (color[0].toUpperCase()) {
    case "BLACK":
      firstColor = "0";
      break;
    case "BROWN":
      firstColor = "1";
      break;
    case "RED":
      firstColor = "2";
      break;
    case "ORANGE":
      firstColor = "3";
      break;
    case "YELLOW":
      firstColor = "4";
      break;
    case "GREEN":
      firstColor = "5";
      break;
    case "BLUE":
      firstColor = "6";
      break;
    case "VIOLET":
      firstColor = "7";
      break;
    case "GREY":
      firstColor = "8";
      break;
    case "WHITE":
      firstColor = "9";
      break;
    default:
      firstColor = "";
      break;
  }

  switch (color[1].toUpperCase()) {
    case "BLACK":
      secondColor = "0";
      break;
    case "BROWN":
      secondColor = "1";
      break;
    case "RED":
      secondColor = "2";
      break;
    case "ORANGE":
      secondColor = "3";
      break;
    case "YELLOW":
      secondColor = "4";
      break;
    case "GREEN":
      secondColor = "5";
      break;
    case "BLUE":
      secondColor = "6";
      break;
    case "VIOLET":
      secondColor = "7";
      break;
    case "GREY":
      secondColor = "8";
      break;
    case "WHITE":
      secondColor = "9";
      break;
    default:
      secondColor = "";
      break;
  }

  let colorCode = parseInt(firstColor + secondColor);

  return colorCode;
}

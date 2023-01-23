export const colorCode = (color: string): number => {
  const colorIndex = COLORS.indexOf(color);
  return colorIndex;
};

export const COLORS: string[] = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

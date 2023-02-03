export function age(planet: string, seconds: number): number {
  let earthYearAge: number = 0;

  // Mercury: orbital period 0.2408467 Earth years
  // Venus: orbital period 0.61519726 Earth years
  // Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31557600 seconds
  // Mars: orbital period 1.8808158 Earth years
  // Jupiter: orbital period 11.862615 Earth years
  // Saturn: orbital period 29.447498 Earth years
  // Uranus: orbital period 84.016846 Earth years
  // Neptune: orbital period 164.79132 Earth years

  const earthSecondsAYear: number = 31557600;
  const calcPlanetAge = {
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Earth: 1,
    Mars: 1.8808158,
    Jupiter: 11.862615,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Neptune: 164.79132,
  };

  switch (planet.toLowerCase()) {
    case "mercury":
      earthYearAge = seconds / earthSecondsAYear / calcPlanetAge.Mercury;
      break;
    case "venus":
      earthYearAge = seconds / earthSecondsAYear / calcPlanetAge.Venus;
      break;
    case "earth":
      earthYearAge = seconds / earthSecondsAYear / calcPlanetAge.Earth;
      break;
    case "mars":
      earthYearAge = seconds / earthSecondsAYear / calcPlanetAge.Mars;
      break;
    case "jupiter":
      earthYearAge = seconds / earthSecondsAYear / calcPlanetAge.Jupiter;
      break;
    case "saturn":
      earthYearAge = seconds / earthSecondsAYear / calcPlanetAge.Saturn;
      break;
    case "uranus":
      earthYearAge = seconds / earthSecondsAYear / calcPlanetAge.Uranus;
      break;
    case "neptune":
      earthYearAge = seconds / earthSecondsAYear / calcPlanetAge.Neptune;
      break;
  }

  return Math.round(earthYearAge * 100) / 100;
}

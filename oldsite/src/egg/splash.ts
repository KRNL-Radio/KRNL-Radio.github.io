const SPLASHES = [
  "Technowizard Extraordinaire",
  "Fishy Saltwater Fish",
  "(not) Forklift Certified",
  "Local Weather Prophet",
  "square",
  "Summoner of Pikachu",
];

export default function getRandomSplash() {
  return SPLASHES[Math.floor(Math.random() * SPLASHES.length)];
}

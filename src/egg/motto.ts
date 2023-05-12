const MOTTOS = ["Foster Home of Rock & Roll", "Unoffical Weezer Fan Club"];

const WEIGHTS = [0.99, 0.01];

export default function getMotto() {
  let rand = Math.random();
  let weightSum = 0;
  console.log(rand);
  for (let i = 0; i < WEIGHTS.length; i++) {
    weightSum += WEIGHTS[i];
    if (rand <= weightSum) {
      return MOTTOS[i];
    }
  }
}

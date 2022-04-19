export const calculateCm = ({ Q, K, V, us, y, sigmaY, sigmaZ }) =>
  ((Q * K * V) / (2 * Math.PI * us * sigmaY * sigmaZ)) *
  Math.exp(-0.5 * (y ** 2 / sigmaY ** 2));

export const calculateUs = ({ uref, hs, zref, p }) => uref * (hs / zref) ** p;

export const calculateFb = ({ g, vs, ds, Ts, Ta }) =>
  g * vs * ds ** 2 * ((Ts - Ta) / (4 * Ts));

export const calculateHsmod = ({ hs, vs, us, ds }) => {
  if (vs < 1.5 * us) {
    return hs - 2 * ds * (vs / us - 1.5);
  }
  return hs;
};

export const calculateXf = ({ Fb }) => {
  if (Fb < 55) {
    return 49 * Fb ** (5 / 8);
  }
  return 119 * Fb ** (2 / 5);
};

export const calculateHe = ({ x, xf, hsmod, Fb, us }) => {
  if (x < xf) {
    return hsmod + 1.6 * ((Fb ** (1 / 3) * xf ** (1 / 3)) / us);
  }
  return hsmod + 1.6 * ((Fb ** (1 / 3) * x ** (1 / 3)) / us);
};

export const calculateSigmaY = ({ x, c, d }) =>
  456.11628 * x * Math.tan(0.01745329 * (c - d * Math.log(x)));

export const calculateSigmaZ = ({ a, x, b }) => a * x ** b;

export const calculateV = ({ vs, z, he, sigmaZ }) => {
  let sum = 0;
  for (let m = 1; m <= 3; m += 1) {
    const L = 320 * vs;
    const H1 = z - (2 * m * L - he);
    const H2 = z + (2 * m * L - he);
    const H3 = z - (2 * m * L + he);
    const H4 = z + (2 * m * L + he);
    sum +=
      Math.exp(-0.5 * (H1 ** 2 / sigmaZ ** 2)) +
      Math.exp(-0.5 * (H2 ** 2 / sigmaZ ** 2)) +
      Math.exp(-0.5 * (H3 ** 2 / sigmaZ ** 2)) +
      Math.exp(-0.5 * (H4 ** 2 / sigmaZ ** 2));
  }
  return (
    Math.exp(-0.5 * ((z - he) ** 2 / sigmaZ ** 2)) +
    Math.exp(-0.5 * ((z + he) ** 2 / sigmaZ ** 2)) +
    sum
  );
};

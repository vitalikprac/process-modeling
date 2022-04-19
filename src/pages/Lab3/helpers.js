import {
  calculateCm,
  calculateFb,
  calculateHe,
  calculateHsmod,
  calculateSigmaY,
  calculateSigmaZ,
  calculateUs,
  calculateV,
  calculateXf,
} from './calculations';

export const makeCalculations = (inputData) => {
  const { Q, K, hs, uref, zref, p, g, vs, ds, Ts, Ta, x, y, z, a, b, c, d } =
    inputData;
  const us = calculateUs({ uref, hs, zref, p });

  const Fb = calculateFb({ g, vs, ds, Ts, Ta });
  const hsmod = calculateHsmod({ vs, us, ds, hs });
  const xf = calculateXf({ Fb });
  const he = calculateHe({ x, xf, hsmod, Fb, us });

  const sigmaY = calculateSigmaY({ x, c, d });
  const sigmaZ = calculateSigmaZ({ a, x, b });

  const V = calculateV({ vs, z, he, sigmaZ });
  const cm = calculateCm({ Q, K, V, us, y, sigmaY, sigmaZ });

  return { cm };
};

export const calculateOmega = ({ V, D }) => (4 * V) / (Math.PI * D ** 2);

export const calculateF = ({ omega, D, H, deltaT }) =>
  (1000 * (omega * omega * D)) / (H * H * deltaT);

export const calculateVm = ({ V, deltaT, H }) =>
  0.65 * Math.cbrt((V * deltaT) / H);

export const calculateVm1 = ({ omega, D, H }) => (1.3 * omega * D) / H;

export const calculateFe = ({ vm1 }) => 800 * vm1 ** 3;

export const calculateM = ({ f, fe }) => {
  if (fe < f && f < 100) {
    return fe;
  }
  if (f < 100) {
    return 1 / (0.67 + 0.1 * Math.sqrt(f) + 0.34 * Math.cbrt(f));
  }

  return 1.45 / Math.cbrt(f);
};

export const calculateN = ({ vm, f }) => {
  if (f >= 100) {
    throw new Error('Not implemented');
  }

  if (vm >= 2) {
    return 1;
  }

  if (vm >= 0.5 && vm < 2) {
    return 0.532 * vm * vm - 2.13 * vm + 3.13;
  }

  if (vm < 0.5) {
    return 4.4;
  }

  throw new Error('Unreachable code in calculateN function');
};

export const calculateCm = ({
  A,
  M,
  F,
  f,
  H,
  vm,
  vm1,
  n,
  m,
  nu,
  omega,
  V,
  deltaT,
  PDK,
}) => {
  if (f >= 100) {
    const K = 1 / (7.1 * Math.sqrt(omega * V));
    return (K * (A * M * f * n * nu)) / H ** (4 / 3);
  }
  if ((f < 100 && vm < 0.5) || (f >= 100 && vm1 < 0.5)) {
    const m1 = f < 100 ? 2.86 * m : 0.9;
    return (A * M * f * m1 * nu) / H ** (4 / 3);
  }

  return (A * M * F * m * n * nu) / (H * H * Math.cbrt(V * deltaT) * PDK);
};

export const calculateD = ({ vm, vm1, fe, f }) => {
  if (f > 100) {
    if (vm <= 0.5) {
      return 5.7;
    }
    if (vm > 0.5 && vm <= 2) {
      return 11.4 * vm1;
    }
    if (vm > 2) {
      return 16 * Math.sqrt(vm1);
    }
  }

  if (vm <= 0.5) {
    return 2.48 * (1 + 0.28 * Math.cbrt(fe));
  }

  if (vm > 0.5 && vm <= 2) {
    return 4.95 * vm * (1 + 0.28 * Math.cbrt(f));
  }

  if (vm > 2) {
    return 7 * Math.sqrt(vm) * (1 + 0.28 * Math.cbrt(f));
  }

  throw new Error('Unreachable code in calculateD function');
};

export const calculateUm = ({ f, vm1, vm }) => {
  if (f > 100) {
    if (vm1 <= 0.5) {
      return 0.5;
    }
    if (vm1 > 0.5 && vm1 <= 2) {
      return vm1;
    }
    if (vm1 > 2) {
      return 2.2 * vm1;
    }
  }

  if (vm <= 0.5) {
    return 0.5;
  }

  if (vm > 0.5 && vm <= 2) {
    return vm;
  }

  if (vm > 2) {
    return vm * (1 + 0.12 * Math.sqrt(f));
  }

  throw new Error('Unreachable code in calculateUm');
};

export const calculateXm = ({ F, d, H }) => ((5 - F) * d * H) / 4;

export const calculateR = ({ uCoef }) => {
  if (uCoef <= 1) {
    return 0.67 * uCoef + 1.67 * uCoef * uCoef - 1.34 * uCoef * uCoef * uCoef;
  }

  return (3 * uCoef) / (2 * uCoef * uCoef - uCoef + 2);
};

export const calculateP = ({ uCoef }) => {
  if (uCoef <= 0.25) {
    return 3;
  }

  if (uCoef <= 1 && uCoef > 0.25) {
    return 8.43 * (1 - uCoef) ** 3 + 1;
  }

  if (uCoef > 1) {
    return 0.32 * uCoef + 0.68;
  }

  throw new Error('Unreachable code in calculateP');
};

export const calculateS1 = ({ H, F, xCoef }) => {
  if (H >= 2 && H < 10 && xCoef < 1) {
    return 0.125 * (10 - H) + 0.125 * (H - 2) * calculateS1({ F, xCoef });
  }

  if (xCoef <= 1) {
    return 3 * xCoef ** 4 - 8 * xCoef ** 3 + 6 * xCoef ** 2;
  }

  if (xCoef > 1 && xCoef <= 8) {
    return 1.13 / (0.13 * xCoef ** 2 + 1);
  }
  if (F <= 1.5 && xCoef > 8) {
    return xCoef / (3.58 * xCoef ** 2 - 35.2 * xCoef + 120);
  }

  if (F > 1.5 && xCoef > 8) {
    return 1 / (0.1 * xCoef ** 2 + 2.47 * xCoef - 17.8);
  }

  throw new Error('Unreachable code in calculateS1');
};

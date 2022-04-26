export const calculateQ = ({ nu, m }) => nu * m;

export const calculatePsi = ({ Q, m, x, q, y }) => {
  if (x > 0) {
    return (Q * Math.atan(y / x)) / (2 * Math.PI * m) + (q * y) / m;
  }
  return (Q * (Math.PI - Math.atan(y / x))) / (2 * Math.PI * m) + (q * y) / m;
};

export const calculateCoordinates = ({ Q, q }) => ({
  xp: -Q / (2 * Math.PI * q),
  yp: 0,
});

export const calculateR = ({ x, y }) => Math.sqrt(x ** 2 + y ** 2);

export const calculateNux = ({ Q, m, ser, r, q }) =>
  -((Q / (2 * Math.PI * m)) * (ser / r ** 2) + q / m);

export const calculateTf = ({ lt, n, nu }) => (lt * n) / nu;

export const calculateQFS = ({ psi1, psi2, m }) => (psi2 - psi1) * m;

export const calculateCs = ({ Co, Q, QFS, Cp }) =>
  (Co * (Q - QFS) + Cp * QFS) / Q;

export const calculateTfLow = ({ ne, m, n, q, x, xp }) =>
  ((ne * m * n) / q) * (x - xp * Math.log(-xp / (x - xp)));

export const calculateMiddle = ({ x1, y1, x2, y2 }) => ({
  x1Ser: (x1 + x2) / 2,
  y1Ser: (y1 + y2) / 2,
});

export const calculateRich = ({ F, Q, m }) => {
  if (F < Q / (2 * m)) {
    return 'Джерело потрапляє в область живлення водозабору';
  }

  if (F === (Q / 2) * m) {
    return 'Джерело знаходиться на нейтральній течії';
  }

  if (F === 0) {
    return 'Джерело водозабору стоїть в центрі потоку забруднюючого джерела';
  }
  return '';
};

export const reportFormat = (params) => {
  const { lt, Q, Cs, Tf, tf, isReach } = Object.entries(params).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value?.toFixed?.(4) || value,
    }),
    {},
  );
  const { number } = params;

  return `Джерело №${number}<br/>
        Мінімальна довжина вздовж лінії течії - ${lt}<br/>
        Приплив мінералізованої води - ${Q}<br/>
        Середня мінералізація у водозаборі - ${Cs}<br/>
        Час міграції вздовж усієї лінії течії - ${Tf}<br/>
        Час руху на головній лінії течії - ${tf}<br/>
        ${isReach}<br/>`;
};

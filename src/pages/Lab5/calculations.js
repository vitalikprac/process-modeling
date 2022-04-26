export const calculateQ = ({ v, m }) => v * m;

export const calculateYp = ({ d, Q, q }) =>
  Math.sqrt(d * (Q / (Math.PI * q) - d));

export const calculateQr = ({ Q, q, yp, d }) =>
  ((2 * Q) / Math.PI) * Math.atan(yp / d) - 2 * q * yp;

export const calculateQgw = ({ Q, q, yp, d }) =>
  ((2 * Q) / Math.PI) * Math.atan(d / yp) + 2 * q * yp;

export const calculateCs = ({ C0, Cr, Qr, Qgw, Q }) => (C0 * Qgw + Cr * Qr) / Q;

export const calculateTf = ({ n, q, d, yp }) => {
  const first = n / q;
  const second = (d ** 2 + yp ** 2) / yp;
  const third = Math.atan2(d, yp);
  return first * (second * third - d);
};

export const getReport = (params) => {
  const { yp, Qr, Qgw, Cs, tf } = Object.entries(params).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value?.toFixed?.(4) || value,
    }),
    {},
  );

  return `Частковий приплив від ріки - ${yp}<br/>
        Приплив річкових вод до свердловини - ${Qr} <br/>
        Приплив підземних вод до свердловини - ${Qgw}<br/>
        Середня мінералізація у водозаборі - ${Cs}<br/>
        Мінімальний час міграції річкових вод - ${tf}<br/>`;
};

import {
  calculateCs,
  calculateQ,
  calculateQgw,
  calculateQr,
  calculateTf,
  calculateYp,
  getReport,
} from './calculations';

export const makeCalculations = ({ C0, Cr, Q1, Q2, d1, d2, n, m, v }) => {
  const q = calculateQ({ v, m });
  const yp1 = calculateYp({ d: d1, Q: Q1, q });
  const Qr1 = calculateQr({ Q: Q1, q, yp: yp1, d: d1 });
  const Qgw1 = calculateQgw({ Q: Q1, q, yp: yp1, d: d1 });
  const Cs1 = calculateCs({ C0, Cr, Qr: Qr1, Qgw: Qgw1, Q: Q1 });
  const tf1 = calculateTf({ n, q: v, d: d1, yp: yp1 });
  const res1 = getReport({ yp: yp1, Qr: Qr1, Qgw: Qgw1, Cs: Cs1, tf: tf1 });

  const yp2 = calculateYp({ d: d2, Q: Q2, q });
  const Qr2 = calculateQr({ Q: Q2, q, yp: yp2, d: d2 });
  const Qgw2 = calculateQgw({ Q: Q2, q, yp: yp2, d: d2 });
  const Cs2 = calculateCs({ C0, Cr, Qr: Qr2, Qgw: Qgw2, Q: Q2 });
  const tf2 = calculateTf({ n, q: v, d: d2, yp: yp2 });
  const res2 = getReport({ yp: yp2, Qr: Qr2, Qgw: Qgw2, Cs: Cs2, tf: tf2 });
  return { res1, res2 };
};

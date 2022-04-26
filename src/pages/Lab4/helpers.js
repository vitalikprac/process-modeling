import {
  calculateCoordinates,
  calculateCs,
  calculateMiddle,
  calculateNux,
  calculatePsi,
  calculateQ,
  calculateQFS,
  calculateR,
  calculateRich,
  calculateTf,
  calculateTfLow,
  reportFormat,
} from './calculations';

export const makeCalculations = ({
  x1Source1,
  y1Source1,
  x1Source2,
  y1Source2,
  y2Source2,
  Cp,
  Co,
  nu,
  m,
  n,
  Q,
  ne,
}) => {
  const { x1Ser, y1Ser } = calculateMiddle({
    x1: x1Source1,
    x2: x1Source2,
    y1: y1Source1,
    y2: y1Source2,
  });

  const q = calculateQ({ nu, m });
  const r = calculateR({ x: x1Ser, y: y1Ser });
  const vx = calculateNux({ Q, m, ser: x1Ser, r, q });
  const vy = calculateNux({ Q, m, ser: y1Ser, r, q });
  const v = calculateR({ x: vx, y: vy });
  const { xp } = calculateCoordinates({ Q, q });

  const psi11 = calculatePsi({ Q, m, x: x1Source1, q, y: x1Source2 });
  const psi12 = calculatePsi({ Q, m, x: y1Source1, q, y: y1Source2 });

  const lt1 = calculateR({ x: x1Source1, y: y1Source1 });
  const Tf1 = calculateTf({ lt: lt1, n, nu: v });
  const Q1 = calculateQFS({ psi1: psi11, psi2: psi12, m });
  const Cs1 = calculateCs({ Co, Q, QFS: Q1, Cp });
  const tf1 = calculateTfLow({ ne, m, n, q, x: x1Source1, xp });
  const F = Math.min(psi11, psi12);
  const isReach = calculateRich({ F, Q, m });

  const dj1 = reportFormat({
    lt: Math.abs(lt1),
    Tf: Math.abs(Tf1),
    Q: Math.abs(Q1),
    Cs: Math.abs(Cs1),
    tf: Math.abs(tf1),
    isReach,
    number: 1,
  });

  const psi21 = calculatePsi({ Q, m, x: x1Source2, q, y: y1Source2 });
  const psi22 = calculatePsi({ Q, m, x: x1Source2, q, y: y2Source2 });
  const lt2 = calculateR({ x: x1Source2, y: y1Source2 });
  const Tf2 = calculateTf({ lt: lt2, n, nu: v });
  const Q2 = calculateQFS({ psi1: psi21, psi2: psi22, m });
  const Cs2 = calculateCs({ Co, Q, QFS: Q2, Cp });
  const tf2 = calculateTfLow({ ne, m, n, q, x: x1Source2, xp });
  const F2 = Math.min(psi21, psi22);
  const isReach2 = calculateRich({ F: F2, Q, m });

  const dj2 = reportFormat({
    lt: Math.abs(lt2),
    Tf: Math.abs(Tf2),
    Q: Math.abs(Q2),
    Cs: Math.abs(Cs2),
    tf: Math.abs(tf2),
    isReach: isReach2,
    number: 2,
  });

  return { dj1, dj2 };
};

import {
  calculateCm,
  calculateD,
  calculateF,
  calculateFe,
  calculateM,
  calculateN,
  calculateOmega,
  calculateUm,
  calculateVm,
  calculateVm1,
  calculateXm,
} from './calculations';

export const makeCalculations = (inputData) => {
  const { A, V, T, PDK, F, nu, tSummer } = inputData;
  const M = inputData.Q;
  const D = inputData.d;
  const H = inputData.h;
  const omega = calculateOmega({ V, D });
  const deltaT = T - tSummer;
  const f = calculateF({ omega, D, H, deltaT });
  const vm = calculateVm({ V, deltaT, H });
  const vm1 = calculateVm1({ omega, D, H });
  const fe = calculateFe({ vm1 });
  const m = calculateM({ f, fe });
  const n = calculateN({ vm, f });
  const d = calculateD({ vm, vm1, fe, f });
  const xm = calculateXm({ F, d, H });
  const um = calculateUm({ f, vm1, vm });
  const cm = calculateCm({
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
  });
  return { xm, um, cm };
};

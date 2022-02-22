export const eco2 = () => {
  let cm;
  const A = 180; // за условием
  const M = 10; // за условием
  const F = 1; // за условием
  const H = 5; // за условием
  const D = 1.3; // за условием
  let w0;
  const V = 8.04; // за условием
  const Tmax = 25; // за условием
  const Tgas = 200; // за условием
  let deltT;
  let f;
  let vm;
  let vm1;
  let m;
  const n = 1; // за расчетами
  const nu = 1; // за условием
  let d;
  let xdang;
  let udang;
  const u = 6.4; // за условием
  let unew;
  let cmmax;
  let r;
  let xmax;
  let p;
  let c;
  let s1;
  let xnew;
  const x = 100; // за условием
  const y = 100; // за условием
  let zy;
  let s2;
  let t;
  let cmax;
  let s11;
  let csum;

  w0 = (4 * V) / (Math.PI * D ** 2);

  // deltT
  deltT = Tgas - Tmax;

  // f    vm
  f = (1000 * w0 ** 2 * D) / (H ** 2 * deltT);
  vm = 0.65 * Math.cbrt((V * deltT) / H);
  vm1 = 1.3 * ((w0 * D) / H);

  // m    n=1 за формулами
  m = 1 / (0.67 + 0.1 * Math.sqrt(f) + 0.34 * Math.cbrt(f));

  // dangerous x
  d = 7 * Math.sqrt(vm) * (1 + 0.28 * Math.cbrt(f));
  xdang = ((5 - F) * d * H) / 4;
  // alert(`Опасное растояние x, м: ${xdang.toFixed(1)}`);

  // dangerous u
  udang = vm * (1 + 0.12 * Math.sqrt(f));
  // alert(`Опасная скорость u ветра, м/с: ${udang.toFixed(1)}`);

  // cm
  cm = (A * M * F * m * n * nu) / (H ** 2 * Math.cbrt(V * deltT)) / 0.15;

  // cmmax
  unew = u / udang;
  if (u / udang > 1) r = (3 * unew) / (2 * unew ** 2 - unew + 2);
  cmmax = r * cm;

  // xmax
  p = 0.32 * unew + 0.68;
  xmax = p * xdang;

  // c: 2<=H<10 H=5 xnew<1
  xnew = x / xdang;
  s1 = 0.125 * (10 - H) + 0.125 * (H - 2);
  c = s1 * cm;

  // y u>5
  t = 5 / x ** 2;
  let sniz; //+
  sniz = 1 + 5 * t + 12.8 * t ** 2 + 17 * t ** 3 + 45.1 * t ** 4;
  s2 = 1 / sniz ** 2;
  zy = s2 * c;

  // cmax xnew<1
  s11 = 3 * xnew ** 4 - 8 * xnew ** 3 + 6 * xnew ** 2;
  cmax = s1 * cm;
  console.log('SHO');
  // alert(`Сумма cm по всем источникам, ед ПДК: ${cmax.toFixed(4)}`);
};

import { Home } from '../pages/Home';
import { Lab2 } from '../pages/Lab2';

export const HOME = '/';
export const LAB2 = '/lab2';

export const PAGES = [
  {
    id: HOME,
    path: HOME,
    element: <Home />,
    title: 'Головна',
  },
  {
    id: LAB2,
    path: LAB2,
    element: <Lab2 />,
    title: 'Лабораторна робота №2',
  },
];

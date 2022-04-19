import { Home } from '../pages/Home';
import { Lab2 } from '../pages/Lab2';
import { Lab3 } from '../pages/Lab3';

export const HOME = '/';
export const LAB2 = '/lab2';
export const LAB3 = '/lab3';

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
  {
    id: LAB3,
    path: LAB3,
    element: <Lab3 />,
    title: 'Лабораторна робота №3',
  },
];

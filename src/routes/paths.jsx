import { Home } from '../pages/Home';
import { Lab2 } from '../pages/Lab2';
import { Lab3 } from '../pages/Lab3';
import { Lab4 } from '../pages/Lab4';

export const HOME = '/';
export const LAB2 = '/lab2';
export const LAB3 = '/lab3';
export const LAB4 = '/lab4';

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
  {
    id: LAB4,
    path: LAB4,
    element: <Lab4 />,
    title: 'Лабораторна робота №4',
  },
];

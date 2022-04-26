import { Home } from '../pages/Home';
import { Lab2 } from '../pages/Lab2';
import { Lab3 } from '../pages/Lab3';
import { Lab4 } from '../pages/Lab4';
import { Lab5 } from '../pages/Lab5';

export const HOME = '/';
export const LAB2 = '/lab2';
export const LAB3 = '/lab3';
export const LAB4 = '/lab4';
export const LAB5 = '/lab5';

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
  {
    id: LAB5,
    path: LAB5,
    element: <Lab5 />,
    title: 'Лабораторна робота №5',
  },
];

import { atom } from "jotai";
import {atomWithStorage} from 'jotai/utils'

export const newsAtom = atom([]);
export const scrollAtom = atom(false);
const urlAtom = atom(
  `https://newsapi.org/v2/everything?q=bitcoin&apiKey=2207cb0d3da34c0589ff1bcef4f3dfe1`
);
export const fetchUrlAtom = atom(async (get) => {
  const response = await fetch(get(urlAtom));
  const data = await response.json();
  return data;
});

export const authAtom = atom(false);
export const bookmarksAtom = atom();

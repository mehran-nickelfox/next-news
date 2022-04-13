import { atom } from "jotai";
import {atomWithStorage} from 'jotai/utils'

export const newsAtom = atom([]);
export const scrollAtom = atom(false);

export const storeUserAtom=atomWithStorage('user',"");

export const authAtom = atom(false);
export const bookmarksAtom = atom();

import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const authAtom = atom(false);

export const newsAtom = atom([]);

export const storeAtom = atomWithStorage("user");
export const bookmarksAtom = atom();

export const openAtom = atom(false);

export const checkingUser = atom(false);

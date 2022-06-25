import { atom, selector } from "recoil"

// グローバル変数のcounterAtom
export const counterAtom = atom<number>({
    key: 'counterAtom',
    default: 0,
  })

// グローバル変数のGetter/Setter
export const counterSelector = selector<number>({
    key: 'counterSelector',
    get: ({ get }) => {
      const counter = get(counterAtom)
      return counter
    },
    set: ({ set }, newValue) => {
      set(counterAtom, newValue)
    },
  })
import { atom, selector } from "recoil";

export const counterValue = atom({
    key: "counterState",
    default: 0,
});

export const counterNextValue = selector({
    key: "counterNextState",
    get: ({ get }) => {
        return get(counterValue) + 1;
    },
});

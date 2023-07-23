import { atom, selector, selectorFamily } from "recoil";

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

export const dogData = selector({
    key: "dogData",
    get: async () => {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await res.json();
        return data.message;
    },
});

export const nameBreed = selectorFamily({
    key: "breed",
    get: (breed) => async () => {
        const res = await fetch(
            `https://dog.ceo/api/breed/${breed}/images/random`
        );
        const data = await res.json();
        return data.message;
    },
});

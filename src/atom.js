import { atom } from "recoil";

export const counterValue = atom({
    key: "counterState",
    default: 0,
});

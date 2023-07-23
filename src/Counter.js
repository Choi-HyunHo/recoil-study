import React from "react";
import { useRecoilState } from "recoil";
import { counterValue } from "./atom";

export default function Counter() {
    const [value, setValue] = useRecoilState(counterValue);

    const add = () => {
        setValue((prev) => prev + 1);
    };

    const minus = () => {
        setValue((prev) => prev - 1);
    };

    return (
        <>
            <div>
                <button onClick={() => add()}>+</button>
                <p>{value}</p>
                <button onClick={() => minus()}>-</button>
            </div>
        </>
    );
}

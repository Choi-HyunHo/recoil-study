import React from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { counterNextValue, counterValue } from "./atom";

export default function NumberText() {
    const nextCount = useRecoilValue(counterNextValue);
    const resetCounter = useResetRecoilState(counterValue);
    return (
        <>
            <p>다음 카운터는 {nextCount} 입니다.</p>
            <button onClick={resetCounter}>Reset</button>
        </>
    );
}

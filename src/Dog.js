import React from "react";
import { useRecoilValue } from "recoil";
import { dogData, nameBreed } from "./atom";

export default function Dog({ breed }) {
    // const dogImg = useRecoilValue(dogData);
    const dogImg = useRecoilValue(nameBreed(breed));

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={dogImg} alt="" width="20%" height="auto" />
        </div>
    );
}

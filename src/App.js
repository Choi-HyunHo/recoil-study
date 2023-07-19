import Counter from "./Counter";

// recoil 관련 코드 import
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from "recoil";
import NumberText from "./NumberText";

function App() {
    return (
        <RecoilRoot>
            <div
                style={{
                    height: "20vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Counter />
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <NumberText />
            </div>
        </RecoilRoot>
    );
}

export default App;

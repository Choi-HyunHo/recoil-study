import Counter from "./Counter";

// recoil 관련 코드 import
import { RecoilRoot } from "recoil";
import NumberText from "./NumberText";
import Dog from "./Dog";

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
            <Dog breed="pug" />
        </RecoilRoot>
    );
}

export default App;

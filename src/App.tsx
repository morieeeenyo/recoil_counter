import React, { Suspense } from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import { Counter } from "./components/counter/";
import { Todos } from "./components/todos";

// 値取得中のローディング処理
const Fallback = () => {
  return (
    <div id="load">
      <span>Loading...</span>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Suspense fallback={<Fallback />}>
          <div>
            <Counter />
            <Todos />
          </div>
        </Suspense>
      </RecoilRoot>
    </div>
  );
}

export default App;

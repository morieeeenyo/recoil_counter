import React from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import { Counter } from "./components/counter/";
import { Todos } from "./components/todos";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <div>
          <Counter />
          <Todos />
        </div>
      </RecoilRoot>
    </div>
  );
}

export default App;

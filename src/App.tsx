import React from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import Counter from "./components/counter/";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <div>
          <Counter />
        </div>
      </RecoilRoot>
    </div>
  );
}

export default App;

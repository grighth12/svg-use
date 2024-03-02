import reactLogo from "./assets/react.svg";
import ViteLogo from "/vite.svg?react";
import "./App.css";
// import { ReactIcon } from "./assets/react";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <ViteLogo />

        <svg>
          {/* TODO: xlink를 넣어본다. */}
          <use href={`${reactLogo}#react`} />
        </svg>
        {/* <ReactIcon /> */}
      </div>
    </>
  );
}

export default App;

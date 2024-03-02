import reactLogo from "./assets/react.svg";
// import ViteLogo from "/vite.svg?react";
import "./App.css";

function App() {
  return (
    <>
      <div>
        {/* <ViteLogo /> */}

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

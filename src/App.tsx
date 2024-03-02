// import reactLogo from "../public/asset/react.svg";
// import ViteLogo from "/vite.svg?react";
import "./App.css";

function App() {
  return (
    <>
      <div>
        {/* <ViteLogo /> */}

        <img src="/asset/react.svg" />
        <svg>
          {/* TODO: xlink를 넣어본다. */}
          {/* <use href={`${reactLogo}#react`} /> */}
          <use href={`/asset/react.svg#react`} />
        </svg>
        {/* <ReactIcon /> */}
      </div>
    </>
  );
}

export default App;

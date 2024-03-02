// import reactLogo from "../public/asset/react.svg";
// import ViteLogo from "/vite.svg?react";
import "./App.css";

function App() {
  return (
    <>
      <div>
        {/* <ViteLogo /> */}

        {/* <img src="/asset/react.svg" /> */}

        <div style={{ color: "red" }}>
          <svg viewBox="0 0 40 40">
            <use href={`/asset/photo-upload.svg#photo-upload`} />
          </svg>
        </div>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Font from "./Font";

function App() {
  return (
    <>
      <div className="frame">
        <h1 className="frame__title">Ribbons</h1>
        <div className="frame__links"></div>
        <div className="frame__nav">
          <a
            className="frame__link"
            href="https://isengupt.github.io/fiber-website/"
          >
            Previous
          </a>
          <a className="frame__link" href="#">
            Resume
          </a>
          <a
            className="frame__link"
            href="https://github.com/isengupt/ribbons/"
          >
            GitHub
          </a>
        </div>
      </div>
      <Font />
    </>
  );
}

export default App;

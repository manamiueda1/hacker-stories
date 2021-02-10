import logo from "./logo.svg";
import "./App.css";

const title = "React";

const welcome = {
  greeting: "Hey",
  title: "React",
};

function getTitle(title) {
  return title;
}

function App() {
  return (
    <div>
      <h1>hello {getTitle("React")}</h1>

      <label htmlFor="search" type="text">
        Search:
      </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
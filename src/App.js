import logo from "./logo.svg";
import "./App.css";

const list = [
  {
    title: "React",
    url: "https://reactjs.org",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

let studentData = [
  {
    id: 1,
    name: "Eddy",
    color: "yellow",
    school: "Nebula Academy",
  },
  {
    id: 2,
    name: "Chelsea",
    color: "purple",
    school: "Nebula Academy",
  },
  {
    id: 3,
    name: "Tauseef",
    color: "orange",
    school: "Nebula Academy",
  },
  {
    id: 4,
    name: "Maurice",
    color: "red",
    school: "Nebula Academy",
  },
  {
    id: 5,
    name: "D'aja",
    color: "blue",
    school: "Nebula Academy",
  },
  {
    id: 6,
    name: "Jasmine",
    color: "pink",
    school: "Nebula Academy",
  },
  {
    id: 7,
    name: "Anitria",
    color: "green",
    school: "Nebula Academy",
  },
];

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search" type="text">
        Search:
      </label>
      <hr />
      {list.map((item) => (
        <div className="card" key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
        </div>
      ))}
      <input id="search" type="text" />
    </div>
  );
}

export default App;

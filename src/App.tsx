import * as React from "react";
import "./App.css";

// Fisher-Yates (aka Knuth) Shuffle
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const lessons = ["1", "2", "3", "4", "5", "6", "7"];

const warmupsPerLesson = {
  "1": [
    "Superimposed lines",
    "Ghosted Lines",
    "Ghosted Planes",
    "Tables of Ellipses",
    "Ellipses in Planes",
    "Funnels",
    "Plotted Perspective",
    "Rough Perspective",
  ],
  "2": ["some test one a", "some test one b"],
  "3": ["some tester A", "some testER B"],
};

function App() {
  const [numberOfWarmups, setNumberOfWarmups] = React.useState("3");
  const [highestLevelCompleted, setHighestLevelCompleted] = React.useState("2");
  const [warmups, setWarmups] = React.useState(null);

  const generateWarmups = () => {
    const numWarmups = parseInt(numberOfWarmups);
    if (isNaN(numWarmups)) {
      return <></>;
    } else {
      const filteredWarmups = Object.entries(warmupsPerLesson)
        .filter(
          (entry) => parseInt(entry[0]) <= parseInt(highestLevelCompleted)
        )
        .map((entry) => entry[1])
        .flat();
      shuffle(filteredWarmups);
      const numSamples = Math.min(filteredWarmups.length, numWarmups);
      return filteredWarmups.slice(0, numSamples).map((warmup) => {
        return (
          <li key={warmup} className="list-group-item m-1">
            {warmup}
          </li>
        );
      });
    }
  };

  return (
    <div className="App p-3">
      <div className="row w-100 d-flex align-items-end justify-content-center">
        <div className="col-3">
          <label className="form-label">Highest DAB level completed</label>
          <select
            className="form-select"
            aria-label="Default select example"
            value={highestLevelCompleted}
            onChange={(e) => {
              setHighestLevelCompleted(e.target.value);
            }}
          >
            {lessons.map((lesson) => {
              return (
                <option key={lesson} value={lesson}>
                  {lesson}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-3">
          <div>
            <label className="form-label">Number of warmups</label>
            <input
              className="form-control"
              value={numberOfWarmups}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                isNaN(val) ? setNumberOfWarmups("") : setNumberOfWarmups(val);
              }}
            />
          </div>
        </div>
        <div className="col-1">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setWarmups(generateWarmups());
            }}
          >
            Generate
          </button>
        </div>
      </div>
      <div className="row w-100 pt-5 d-flex align-items-end justify-content-center">
        <div className="col-3">
          <ul className="list-group">{warmups}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;

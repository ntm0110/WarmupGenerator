import * as React from "react";
import { shuffle } from "./utils";
import { warmup, warmups } from "./warmups";

const lessons = ["1", "2", "3", "4", "5", "6", "7"];

function App() {
  const [numberOfWarmups, setNumberOfWarmups] = React.useState("3");
  const [numberOfWarmupsTemp, setNumberOfWarmupsTemp] = React.useState("3");
  const [highestLevelCompleted, setHighestLevelCompleted] = React.useState("2");
  const [randomWarmups, setRandomWarmups] = React.useState(null);

  const getClasses = () => {
    let classesToUse = "list-group justify-content-center";
    if (parseInt(numberOfWarmups) <= 5) {
      classesToUse += " align-items-start list-group-horizontal";
    }
    return classesToUse;
  };

  const generateWarmups = (numToPick: string) => {
    const numWarmups = parseInt(numToPick);
    if (isNaN(numWarmups)) {
      return <></>;
    } else {
      const filteredWarmups: warmup[] = warmups.filter(
        (warmup) => warmup.lesson <= parseInt(highestLevelCompleted)
      );

      shuffle(filteredWarmups);
      const numSamples = Math.min(filteredWarmups.length, numWarmups);

      return filteredWarmups.slice(0, numSamples).map((warmup: warmup) => {
        return (
          <li key={warmup.title} className="list-group-item m-1">
            <div className="card">
              <div className="card-body d-flex justify-content-center">
                <a href={warmup.url} className="card-link">
                  {warmup.title}
                </a>
              </div>
              <img
                className="card-img-top"
                src={warmup.imageUrl}
                alt="Missing lesson image"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
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
              onChange={(e) => {
                const val = parseInt(e.target.value);
                isNaN(val)
                  ? setNumberOfWarmupsTemp("")
                  : setNumberOfWarmupsTemp(e.target.value);
              }}
              defaultValue={numberOfWarmups}
            />
          </div>
        </div>
        <div className="col-1">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setNumberOfWarmups(numberOfWarmupsTemp);
              setRandomWarmups(generateWarmups(numberOfWarmupsTemp));
            }}
          >
            Generate
          </button>
        </div>
      </div>
      <div className="row pt-5 d-flex justify-content-center">
        <div className={parseInt(numberOfWarmups) > 5 ? "col col-lg-4" : "col"}>
          <ul className={getClasses()}>{randomWarmups}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;

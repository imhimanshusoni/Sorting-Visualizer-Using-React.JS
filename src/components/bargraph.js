import { useState } from "react";
import "./bargraph.css";

const Bargraph = ({ arr, setArr }) => {
  let largest = 0;
  arr.forEach((x) => {
    if (x > largest) largest = x;
  });

  const [highlightedIndices, setHighlightedIndices] = useState([]);

  const handleSort = () => {
    const params = window.location.pathname;
    if (params == "/bubble") {
      bubbleSort();
    } else if (params == "/selection") {
      selectionSort();
    } else if (params == "/insertion") {
      insertionSort();
    }
  };

  const bubbleSort = () => {
    // if (animation) animation.forEach((x) => clearTimeout(x));
    // setHighlightedIndices([]);
    const newArr = [...arr];
    const steps = [];
    const highlights = [];
    for (let i = 0; i < newArr.length; ++i) {
      for (let j = 0; j < newArr.length - i - 1; ++j) {
        highlights.push([
          { index: j, type: "compare" },
          { index: j + 1, type: "compare" },
        ]);
        steps.push([...newArr]);
        if (newArr[j] > newArr[j + 1]) {
          highlights.push([
            { index: j, type: "swap" },
            { index: j + 1, type: "swap" },
          ]);
          steps.push([...newArr]);
          [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
          highlights.push([
            { index: j, type: "placement" },
            { index: j + 1, type: "placement" },
          ]);
          steps.push([...newArr]);
        }
      }
    }

    steps.forEach((step, index) => {
      let id = setTimeout(() => {
        setArr(step);
        setHighlightedIndices(highlights[index] || []);
      }, index * 1000);
      // setTimeoutId.push(id);
    });

    let id = setTimeout(() => setHighlightedIndices([]), steps.length * 1000);
    // setTimeoutId.push(id);
    // setAnimation(setTimeoutId);
  };

  const selectionSort = () => {
    // if (animation) animation.forEach((x) => clearTimeout(x));
    // setHighlightedIndices([]);
    const newArr = [...arr];
    const steps = [];
    const highlights = [];
    let n = newArr.length;
    for (let i = 0; i < n - 1; i++) {
      let min_idx = i;
      for (let j = i + 1; j < n; j++) {
        highlights.push([
          { index: i, type: "compare" },
          { index: j, type: "compare" },
        ]);
        steps.push([...newArr]);
        if (newArr[j] < newArr[min_idx]) {
          min_idx = j;
          highlights.push([
            { index: i, type: "swap" },
            { index: j, type: "swap" },
          ]);
          steps.push([...newArr]);
        }
      }
      if (min_idx !== i) {
        highlights.push([
          { index: i, type: "swap" },
          { index: min_idx, type: "swap" },
        ]);
        steps.push([...newArr]);
        let temp = newArr[i];
        newArr[i] = newArr[min_idx];
        newArr[min_idx] = temp;
        highlights.push([
          { index: i, type: "placement" },
          { index: min_idx, type: "placement" },
        ]);
        steps.push([...newArr]);
      }
    }

    steps.forEach((step, index) => {
      let id = setTimeout(() => {
        setArr(step);
        setHighlightedIndices(highlights[index] || []);
      }, index * 1000);
      // setTimeoutId.push(id);
    });
    let id = setTimeout(() => setHighlightedIndices([]), steps.length * 1000);
    // setTimeoutId.push(id);
    // setAnimation(setTimeoutId);
  };

  const insertionSort = () => {
    const newArr = [...arr];
    const steps = [];
    const highlights = [];
    for (let i = 0; i < newArr.length; i++) {
      let j = i;
      highlights.push([{ index: i, type: "compare" }]);
      steps.push([...newArr]);
      while (j > 0 && newArr[j - 1] > newArr[j]) {
        highlights.push([
          { index: i, type: "compare" },
          { index: j - 1, type: "swap" },
          { index: j, type: "swap" },
        ]);
        steps.push([...newArr]);
        [newArr[j - 1], newArr[j]] = [newArr[j], newArr[j - 1]];
        highlights.push([
          { index: i, type: "placement" },
          { index: j, type: "placement" },
          { index: j - 1, type: "placement" },
        ]);
        steps.push([...newArr]);
        j--;
      }
    }

    steps.forEach((step, index) => {
      let id = setTimeout(() => {
        setArr(step);
        setHighlightedIndices(highlights[index] || []);
      }, index * 1000);
    });

    let id = setTimeout(() => setHighlightedIndices([]), steps.length * 1000);
  };

  return (
    <>
      <div id="array-items-container">
        {arr.map((x, idx) => {
          return (
            <div
              className={`array-items ${
                highlightedIndices.find((h) => h.index === idx)?.type
                  ? `highlight-${
                      highlightedIndices.find((h) => h.index === idx).type
                    }`
                  : "highlight-default"
              }`}
              style={{ height: `${Math.floor((x / largest) * 100)}%` }}
            >
              <p>{x}</p>
            </div>
          );
        })}
      </div>
      <div id="array-button-container">
        <button onClick={handleSort}>Sort</button>
      </div>
    </>
  );
};

export default Bargraph;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "./reducers/store";
import "./scss/grid.scss";

const Grid: React.FC = (props) => {
  // let arr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  // const [gridNums, setGridNums] = useState(arr);
  const gridNums = useSelector((state: RootState) => state.gridNums);

  const dispatch = useDispatch();

  const randomize = () => {
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        dispatch({ type: "RANDOMIZE" });
      }, 10);
    }
  };

  useEffect(() => {
    console.log("gridNums updated", gridNums);
  }, [gridNums]);

  return (
    <>
      <div className="grid">
        {gridNums.map((item) => {
          if (item !== 0) {
            return (
              <div key={item} className="grid-item">
                {item}
              </div>
            );
          } else {
            return <div key={item} className="empty"></div>;
          }
        })}
      </div>
      <button
        onClick={() => {
          randomize();
        }}
      >
        Randomize
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DOWN" });
        }}
      >
        DOWN
      </button>
      <button
        onClick={() => {
          dispatch({ type: "LEFT" });
        }}
      >
        LEFT
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RIGHT" });
        }}
      >
        RIGHT
      </button>
      <button
        onClick={() => {
          dispatch({ type: "UP" });
        }}
      >
        UP
      </button>
    </>
  );
};

export default Grid;

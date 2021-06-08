import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

import "./scss/grid.scss";

const Grid = () => {
  // let arr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  // const [gridNums, setGridNums] = useState(arr);
  const gridNums = useSelector((state) => state.gridNums);

  const dispatch = useDispatch();

  const randomize = () => {
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        dispatch({ type: "RANDOMIZE" });
      }, i * 20);
    }
  };

  useEffect(() => {
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
      <div className="controls">
        <Button
          className="randomize button"
          variant="contained"
          color="secondary"
          onClick={() => {
            randomize();
          }}
        >
          Randomize
        </Button>
        <Button
          className="up button"
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch({ type: "UP" });
          }}
        >
          UP
        </Button>
        <Button
          className="left button"
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch({ type: "LEFT" });
          }}
        >
          LEFT
        </Button>
        <Button
          className="right button"
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch({ type: "RIGHT" });
          }}
        >
          RIGHT
        </Button>
        <Button
          className="down button"
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch({ type: "DOWN" });
          }}
        >
          DOWN
        </Button>
      </div>
    </>
  );
};

export default Grid;

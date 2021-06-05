import React from "react";

import "./scss/grid.scss";

const Grid: React.FC = (props) => {
  let arr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  console.log(arr);

  const randomize = () => {
    // curr position can be swapped with these postions
    const posArr = [-1, 3, 1, -3];

    // curr position of blank space
    const pos = arr.findIndex((item) => item === 0);
    console.log("pos", pos);

    // generate random number
    const rand = Math.floor(Math.random() * 3);
    console.log("rand", rand);

    // new position of blank space
    const newPos = pos - posArr[rand];
    console.log("newPos", newPos);

    // swapping curr position arr element with new position element
    if (arr[newPos]) {
      let temp = arr[pos];
      arr[pos] = arr[newPos]
      arr[newPos] = temp;
      // arr[pos], arr[newPos] = arr[newPos], arr[pos];
    }

    console.log(arr);
  };

  return (
    <>
      <div className="grid">
        {arr.map((item) => {
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
        Random
      </button>
    </>
  );
};

export default Grid;

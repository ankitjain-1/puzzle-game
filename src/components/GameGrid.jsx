import { useEffect } from "react";
import { useSelector } from "react-redux";

import "./../scss/Grid.scss";

const Grid = () => {
  const gridNums = useSelector((state) => state.gridNums);
  const level = useSelector((state) => state.level);
  const isCollapsed = useSelector((state) => state.isCollapsed);

  useEffect(() => {}, [gridNums]);

  return (
    <>
      <div className={`grid level-${level}`}>
        {gridNums.map((item) => {
          if (item !== 0) {
            return (
              <div
                key={item}
                className={`grid-item ${isCollapsed ? "collapsed" : ""}`}
              >
                {item}
              </div>
            );
          } else {
            return (
              <div
                key={item}
                className={`grid-item empty ${isCollapsed ? "collapsed" : ""}`}
              ></div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Grid;

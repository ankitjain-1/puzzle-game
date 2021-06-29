import { useEffect } from "react";
import { useSelector } from "react-redux";

import "./../scss/grid.scss";

const Grid = () => {
  const gridNums = useSelector((state) => state.gridNums);
  const level = useSelector((state) => state.level);

  useEffect(() => {}, [gridNums]);

  return (
    <>
      <div className={`grid level-${level}`}>
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
    </>
  );
};

export default Grid;

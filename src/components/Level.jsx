import { useDispatch, useSelector } from "react-redux";
import "./../scss/Level.scss";

const Level = (props) => {
  const dispatch = useDispatch();

  const currLevel = useSelector((state) => state.level);

  const changeLevel = (level) => {
    dispatch({ type: "LEVEL_CHANGE", level: level, pos: level * level - 1 });
  };

  const isActive = (level) => {
    return level === currLevel ? "is-active" : "";
  };

  return (
    <div className="levels">
      <div
        className={`level-name ${isActive(3)}`}
        onClick={() => {
          changeLevel(3);
        }}
      >
        Easy
      </div>
      <div
        className={`level-name ${isActive(4)}`}
        onClick={() => {
          changeLevel(4);
        }}
      >
        Medium
      </div>
      <div
        className={`level-name ${isActive(5)}`}
        onClick={() => {
          changeLevel(5);
        }}
      >
        Hard
      </div>
    </div>
  );
};

export default Level;

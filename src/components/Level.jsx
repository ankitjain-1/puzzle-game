import { useDispatch } from "react-redux";

const Level = (props) => {
  const dispatch = useDispatch();

  const changeLevel = (level) => {
    dispatch({ type: "LEVEL_CHANGE", level: level, pos: level * level - 1 });
  };

  return (
    <>
      <div className="container">
        <div>
          <div
            className="label"
            onClick={() => {
              changeLevel(3);
            }}
            className="lavel-name"
          >
            Easy
          </div>
          <div
            className="lavel-name"
            onClick={() => {
              changeLevel(4);
            }}
          >
            Medium
          </div>
          <div
            className="lavel-name"
            onClick={() => {
              changeLevel(5);
            }}
          >
            Hard
          </div>
        </div>
      </div>
    </>
  );
};

export default Level;

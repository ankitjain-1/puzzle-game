import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import './../scss/Control.scss';

const Controls = () => {
  const dispatch = useDispatch();

  const level = useSelector((state) => state.level);

  const randomize = () => {
    // dispatch({ type: "IS_COLLAPSED" });
    for (let i = 0; i < 100 * (level - 2); i++) {
      setTimeout(() => {
        dispatch({ type: "RANDOMIZE" });
      }, 10);
    }
  };

  document.onkeydown = (event) => {
    switch (event.code) {
      case "ArrowLeft":
        dispatch({ type: "LEFT" });
        break;
      case "ArrowUp":
        dispatch({ type: "UP" });
        break;
      case "ArrowRight":
        dispatch({ type: "RIGHT" });
        break;
      case "ArrowDown":
        dispatch({ type: "DOWN" });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="controls">
        <button
          className="randomize button"
          variant="contained"
          color="secondary"
          onClick={() => {
            randomize();
          }}
        >
          Randomize
        </button>
        <button
          className="up button"
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch({ type: "UP" });
          }}
        >
          UP
        </button>
        <button
          className="left button"
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch({ type: "LEFT" });
          }}
        >
          LEFT
        </button>
        <button
          className="right button"
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch({ type: "RIGHT" });
          }}
        >
          RIGHT
        </button>
        <button
          className="down button"
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch({ type: "DOWN" });
          }}
        >
          DOWN
        </button>
      </div>
    </>
  );
};

export default Controls;

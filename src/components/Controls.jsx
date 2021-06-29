import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";

const Controls = () => {
  const dispatch = useDispatch();

  const level = useSelector((state) => state.level);

  const randomize = () => {
    for (let i = 0; i < 100 * (level - 2); i++) {
      setTimeout(() => {
        dispatch({ type: "RANDOMIZE" });
      }, i * 20);
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

export default Controls;

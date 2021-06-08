const initialState = {
  gridNums: [1, 2, 3, 4, 5, 6, 7, 8, 0],
  pos: 8,
};

const rootReducers = (state = initialState, action) => {
  const { gridNums, pos } = state;

  switch (action.type) {
    case "RANDOMIZE": {
      // curr position can be swapped with these postions
      const posArr = [-1, -3, 1, 3];

      // generate random number between 0 and 3
      const rand = Math.floor(Math.random() * 4);

      // change in position
      const change = posArr[rand];

      // new position of blank space
      const newPos = pos + change;

      // swapping curr position arr element with new position element
      const getCondition = () => {
        if ((pos + 1) % 3 === 0 && change === 1) return false;
        else if (pos % 3 === 0 && change === -1) return false;
        else return true;
      };
      if (gridNums[newPos] && getCondition()) {
        let newArr = [...gridNums];
        [newArr[pos], newArr[newPos]] = [newArr[newPos], newArr[pos]];
        return {
          ...state,
          pos: newPos,
          gridNums: newArr,
        };
      }
      return state;
    }

    case "UP": {
      const newArr = [...gridNums];
      const newPos = pos - 3;
      if (gridNums[newPos]) {
        [newArr[pos], newArr[newPos]] = [newArr[newPos], newArr[pos]];
      }
      return {
        ...state,
        pos: newPos,
        gridNums: newArr,
      };
    }

    case "DOWN": {
      const newArr = [...gridNums];
      const newPos = pos + 3;
      if (gridNums[newPos]) {
        [newArr[pos], newArr[newPos]] = [newArr[newPos], newArr[pos]];
        return {
          ...state,
          pos: newPos,
          gridNums: newArr,
        };
      }
      return state;
    }

    case "LEFT": {
      const newArr = [...gridNums];
      const newPos = pos - 1;
      if (gridNums[newPos] && pos % 3 !== 0) {
        [newArr[pos], newArr[newPos]] = [newArr[newPos], newArr[pos]];
        return {
          ...state,
          pos: newPos,
          gridNums: newArr,
        };
      }
      return state;
    }

    case "RIGHT": {
      const newArr = [...gridNums];
      const newPos = pos + 1;
      if (gridNums[newPos] && (pos + 1) % 3 !== 0) {
        [newArr[pos], newArr[newPos]] = [newArr[newPos], newArr[pos]];
        return {
          ...state,
          pos: newPos,
          gridNums: newArr,
        };
      }
      return state;
    }

    default:
      return state;
  }
};

export default rootReducers;

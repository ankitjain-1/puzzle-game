import Controls from "./Controls";
import GameGrid from "./GameGrid";
import Level from "./Level";

const GamePage = () => {
  return (
    <div>
      <Level />
      <GameGrid />
      <Controls />
    </div>
  );
};

export default GamePage;

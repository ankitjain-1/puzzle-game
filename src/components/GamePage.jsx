import Controls from "./Controls";
import GameGrid from "./GameGrid";
import Level from "./Level";

const GamePage = () => {
  return (
    <>
      <Level />
      <GameGrid />
      <Controls />
    </>
  );
};

export default GamePage;

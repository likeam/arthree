import GamesInfo from "./components/GamesInfo";
import RenderList from "./components/RenderList";
import { games } from "./data/data";

const App = () => {
  return (
    <>
      <RenderList data={games} resourceName="games" dataToRender={GamesInfo} />
    </>
  );
};

export default App;

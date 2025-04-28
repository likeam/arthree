import GamesInfo from "./components/GamesInfo";
import MoviesInfo from "./components/MoviesInfo";
import RenderList from "./components/RenderList";
import { games, movies } from "./data/data";

const App = () => {
  return (
    <>
      <RenderList data={games} resourceName="games" dataToRender={GamesInfo} />
      <br />
      <br />
      <br />
      <RenderList
        data={movies}
        resourceName="movies"
        dataToRender={MoviesInfo}
      />
    </>
  );
};

export default App;

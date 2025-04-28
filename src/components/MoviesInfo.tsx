interface MoviesInfo {
  movies: {
    movieTitle: string;
    moviePrice: number;
    movieDescription: string;
    movieRating: number;
  };
}

const MoviesInfo = ({ movies }: MoviesInfo) => {
  const { movieTitle, moviePrice, movieDescription, movieRating } = movies;
  return (
    <>
      <br />
      <br />
      <h1>{movieTitle}</h1>
      <br />
      <p>Price: {moviePrice}</p>
      <p>Discription: {movieDescription}</p>
      <p>Rating: {movieRating}</p>
    </>
  );
};

export default MoviesInfo;

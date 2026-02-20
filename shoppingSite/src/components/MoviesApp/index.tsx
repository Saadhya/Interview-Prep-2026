import { getAllGenres, getMovies } from "@/api/moviesApi";
import { useAppDispatch, useAppSelector } from "@/store";
import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect } from "react";
import CustomCard from "./MovieCard";
import Navbar from "./Navbar";

const MoviesApp = () => {
  const dispatch = useAppDispatch();
  const { movies, genres } = useAppSelector((movieState) => movieState.movies);
  console.log("movies", movies);
  // console.log("genres", genres);

  useEffect(() => {
    dispatch(getMovies());
    dispatch(getAllGenres());
    
  }, []);

  return (
    <div>
      <h1 className="uppercase pb-2 text-center">movies app</h1>
      <Navbar />
      <Grid templateColumns={['1fr', 'repeat(3, 1fr)']} gap="6">
        {movies &&
          movies.map((movie: any) => (
            <GridItem  key={movie?.id || movie?.Title}>
              <CustomCard
                title={movie?.original_title || movie?.title}
                description={movie?.description}
                releaseDate={movie?.release_date}
                writer={movie?.writer}
                image={movie?.poster_path || movie?.poster_url}
                voteAverage={movie?.runtime}
                genres={movie?.genres}
              />
            </GridItem>
          ))}
      </Grid>
    </div>
  );
};

export default MoviesApp;

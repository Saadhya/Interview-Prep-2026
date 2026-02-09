import { getMovies } from "@/api/movies";
import { useAppDispatch, useAppSelector } from "@/store";
import { Button, HStack } from "@chakra-ui/react";
import { useEffect } from "react";
import CustomCard from "../UIComponents/CustomCard";

const MoviesApp = () => {
  const { movies } = useAppSelector((movieState) => movieState.movies);
  console.log("movies", movies);

  const disptach = useAppDispatch();
  useEffect(() => {
    disptach(getMovies());
  }, []);

  return (
    <div>
      <h1 className="uppercase pb-2 text-center">movies app</h1>
      <HStack direction={'row'} wrap={"wrap"} gap={4} >
        {movies &&
          movies.map((movie: any) => (
            <CustomCard
              key={movie?.id}
              title={movie?.original_title}
              description={movie?.overview}
              releaseDate={movie?.release_date}
              price={movie?.popularity}
              image={movie?.poster_path}
            />
          ))}
      </HStack>
    </div>
  );
};

export default MoviesApp;

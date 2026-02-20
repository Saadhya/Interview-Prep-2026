export const getMoviesBySearch = async (query: string, moviesList: any[]) => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  const filteredMovies =
    moviesList.length > 0 &&
    query.length > 0 &&
    moviesList.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase()) || 
      movie.description.toLowerCase().includes(query.toLowerCase()) ||
      movie.rating> query
    
    );
  return filteredMovies;
};

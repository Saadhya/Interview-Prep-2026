import { Request, Response } from "express";
import movies from "../data/movies.json";
import genres from "../data/genres.json";

export const getMovies = (_req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    data: movies,
  });
};

export const searchMovie = (req: Request, res: Response) => {
  const { query } = req.query;

  if (!query || query.length === 0) {
    return res.status(200).json({
      status: "ok",
      message: "all movies showing",
      data: movies,
    });
  }
  if (typeof query !== "string") {
    return res.status(400).json({
      status: "error",
      message: "Query parameter must be a string",
    });
  }

  const filteredMovies = movies.filter(
    (movie: any) =>
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.description.toLowerCase().includes(query.toLowerCase()) ||
      movie.writer.toLowerCase().includes(query.toLowerCase()) ||
      movie.director.toLowerCase().includes(query.toLowerCase()) ||
      movie.genres.some((genre: string) =>
        genre.toLowerCase().includes(query.toLowerCase()),
      ) ||
      movie.runtime.toLowerCase().includes(query.toLowerCase()),
  );

  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
    data: filteredMovies,
  });
};

export const getAllGenres = (_req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    data: genres,
  });
};

export const getMoviesByGenre = (req: Request, res: Response) => {
  const { query } = req.query;
  
  if (!query || typeof query !== 'string') {
    return res.status(400).json({
      status: 'error',
      message: 'Genre parameter must be a string'
    });
  }

  const filteredMovies = movies.filter((movie: any) =>
    movie.genres.some((movieGenre: string) => movieGenre.toLowerCase()===query.toLowerCase())
  );
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    data: filteredMovies
  });
};

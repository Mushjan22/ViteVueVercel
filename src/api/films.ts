import axios from "axios";
import type { CustomFilm, Film } from "../types/films";

const API_URL = import.meta.env.VITE_FILMS_API_URL;

export async function getFilms(page: number, search: string): Promise<Film[]> {
  try {
    if (search) {
      const response = await axios.get<{ Search: Film[] }>(
        `${API_URL}&s=${search}&page=${page}`
      );
      return response.data.Search || [];
    } else {
      const movieTitles = ["Inception", "The Dark Knight", "Interstellar"];
      const promises = movieTitles.map((title) =>
        axios.get<{ Search: Film[] }>(`${API_URL}&s=${title}&page=${page}`)
      );
      const responses = await Promise.all(promises);
      const allFilms = responses.flatMap((res) => res.data.Search || []);
      return allFilms;
    }
  } catch (error) {
    console.error("Ошибка при получении фильмов:", error);
    throw error;
  }
}

export async function getFilm(id: string): Promise<CustomFilm | null> {
  try {
    const response = await axios.get<CustomFilm>(`${API_URL}&i=${id}`);
    const films = response.data;
    return films;
  } catch (error) {
    console.error("Ошибка при получении фильма:", error);
    throw error;
  }
}

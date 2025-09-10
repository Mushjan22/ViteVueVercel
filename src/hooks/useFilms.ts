import { ref } from "vue";
import { getFilms } from "../api/films";
import type { Film } from "../types/films";

export function useFilms() {
  const data = ref<Film[] | null>(null);
  const currentPage = ref(1);
  const currentSearch = ref("");

  async function fetchingData() {
    data.value = await getFilms(currentPage.value, currentSearch.value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function pageChangeSearch(page: number, title: string) {
    currentPage.value = page;
    currentSearch.value = title ? title : currentSearch.value;
    fetchingData();
  }

  return {
    data,
    currentPage,
    currentSearch,
    fetchingData,
    pageChangeSearch,
  };
}

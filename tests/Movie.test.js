import { mount } from "@vue/test-utils";
import Movie from "../src/pages/Movie.vue";

import { getFilm } from "../src/api/films";
import { flushPromises } from "@vue/test-utils";

vi.mock("../src/api/films", () => ({
  getFilm: vi.fn(),
}));

vi.mock("vue-router", () => ({
  useRoute: vi.fn(),
}));

import { useRoute } from "vue-router";

describe("Movie.vue", () => {
  it("should renders film data after mount", async () => {
    const mockFilmData = {
      Title: "Inception",
      Year: "2010",
      Director: "Christopher Nolan",
      Poster: "someposter.jpg",
      Runtime: "148 min",
      Released: "16 Jul 2010",
      Language: "English",
      Writer: "Christopher Nolan",
      Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt",
      Awards: "Oscar Winner",
    };

    getFilm.mockResolvedValue(mockFilmData);
    useRoute.mockReturnValue({ params: { id: "tt1375666" } });
    const wrapper = mount(Movie);
    await flushPromises();
    for (const item in mockFilmData) {
      if (item === "Poster") continue;
      expect(wrapper.text()).toContain(String(mockFilmData[item]));
    }
    expect(wrapper.text()).toContain("2010");
    expect(wrapper.find("img").attributes("src")).toBe(mockFilmData.Poster);
  });
 it("should sets film.value to null if getFilm returns null", async () => {
  getFilm.mockResolvedValue(null);
  useRoute.mockReturnValue({ params: { id: "tt0000000" } });

  const wrapper = mount(Movie);
  await flushPromises();

  expect(wrapper.vm.film).toBeNull();
  expect(wrapper.find("div.bg-white").exists()).toBe(false);
});

});

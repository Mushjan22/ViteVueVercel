import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import Pagination from "../src/components/pagination/Pagination.vue";

describe("Pagination.vue", () => {
  it("should renders correct pages and highlights current page", async () => {
    const pageChangeSearchMock = vi.fn();

    const wrapper = mount(Pagination, {
      props: {
        currentPage: 1,
        currentSearch: "inception",
        pageChangeSearch: pageChangeSearchMock,
      },
    });

    const pageButtons = wrapper.findAll("footer > div");
    console.log(pageButtons);
    expect(pageButtons).toHaveLength(5);
    expect(pageButtons[0].text()).toBe("1");
    expect(pageButtons[4].text()).toBe("5");
    expect(pageButtons[0].classes()).toContain("bg-red-500");
    expect(pageButtons[1].classes()).not.toContain("bg-red-500");
    await pageButtons[2].trigger("click");
    expect(pageChangeSearchMock).toHaveBeenCalledWith(3, "inception");
  });

  it("should renders pages correctly when currentPage >= 3", () => {
    const wrapper = mount(Pagination, {
      props: {
        currentPage: 4,
        currentSearch: "matrix",
        pageChangeSearch: vi.fn(),
      },
    });

    const pageButtons = wrapper.findAll("footer > div");
    const pagesText = pageButtons.map((btn) => btn.text());
    expect(pagesText).toEqual(["2", "3", "4", "5", "6"]);
    expect(pageButtons[2].classes()).toContain("bg-red-500");
  });
});

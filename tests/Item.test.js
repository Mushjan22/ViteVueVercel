import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import { createRouter, createMemoryHistory } from "vue-router";
import Item from "../src/components/item/Item.vue";

describe("Item.vue", () => {
  it("should renders props correctly and navigates on click", async () => {
    const routes = [{ name: "Movie", path: "/movie/:id" }];
    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    });

    const pushSpy = vi.spyOn(router, "push");

    const wrapper = mount(Item, {
      global: {
        plugins: [router],
      },
      props: {
        id: 42,
        src: "https://example.com/poster.jpg",
        title: "Test Movie",
      },
    });

    expect(wrapper.find("img").attributes("src")).toBe(
      "https://example.com/poster.jpg"
    );
    expect(wrapper.find("img").attributes("alt")).toBe("Test Movie");
    expect(wrapper.text()).toContain("Test Movie");
    await wrapper.trigger("click");
    expect(pushSpy).toHaveBeenCalledWith({
      name: "Movie",
      params: { id: "42" },
    });
  });
});

import { describe, it, expect } from "vitest";
import Home from "../src/pages/Home.vue";
import { createRouter, createMemoryHistory } from "vue-router";
import { mount } from "@vue/test-utils";
import Search from "../src/components/search/Search.vue";
import Item from "../src/components/item/Item.vue";
import Pagination from "../src/components/pagination/Pagination.vue";

let router;

beforeEach(async () => {
  window.scrollTo = vi.fn();
  router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: "/", component: {} },
      { path: "/movie/:id", component: {} },
    ],
  });
});

describe("Home.vue", () => {
  it("should renders home components", async () => {
    const wrapper = mount(Home, { global: { plugins: [router] } });
    expect(wrapper.findComponent(Search).exists()).toBe(true);
    await wrapper.vm.fetchingData();
    expect(wrapper.findComponent(Pagination).exists()).toBe(true);
    expect(wrapper.findComponent(Item).exists()).toBe(true);
  });
});

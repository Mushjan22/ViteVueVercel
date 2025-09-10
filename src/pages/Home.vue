<script setup lang="ts">
import { onMounted } from "vue";
import Item from "../components/item/Item.vue";
import Pagination from "../components/pagination/Pagination.vue";
import Search from "../components/search/Search.vue";
import { useFilms } from "../hooks/useFilms";

onMounted(() => {
  fetchingData();
});
const { data, fetchingData, currentPage, currentSearch, pageChangeSearch } =
  useFilms();
</script>
<template>
  <div class="bg-black p-10">
    <Search
      :currentSearch="currentSearch"
      :pageChangeSearch="pageChangeSearch"
    />
    <div
      class="xl:grid-cols-4 grid-cols-1 md:grid-cols-3 2xl:grid-cols-5 grid gap-5 w-10/12 m-auto"
    >
      <Item
        v-for="item in data"
        :id="item.imdbID"
        :key="item.imdbID"
        :src="item.Poster"
        :title="item.Title"
      />
    </div>
    <Pagination
      v-if="!((data?.length ?? 0) < 29 && currentPage == 1)"
      :currentPage="currentPage"
      :pageChangeSearch="pageChangeSearch"
      :currentSearch="currentSearch"
    />
  </div>
</template>

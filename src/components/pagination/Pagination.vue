<script setup lang="ts">
import { computed } from "vue";
import type { PaginationProps } from "../../types/films";

const props = defineProps<PaginationProps>();
const pages = computed(() => {
  let arr = [];
  if (props.currentPage < 3) return (arr = [1, 2, 3, 4, 5]);
  for (let i = props.currentPage - 2; i < props.currentPage + 3; i++) {
    arr.push(i);
  }
  return arr;
});
</script>

<template>
  <footer class="flex justify-center mt-10 gap-2">
    <div
      v-for="page in pages"
      :key="page"
      :class="[
        'text-white p-2 rounded-full border border-gray-500 border-solid w-10 h-10 flex items-center justify-center cursor-pointer',
        currentPage === page ? 'bg-red-500' : '',
      ]"
      @click="() => props.pageChangeSearch(page, props.currentSearch)"
    >
      {{ page }}
    </div>
  </footer>
</template>

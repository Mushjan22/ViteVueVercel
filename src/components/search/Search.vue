<script setup lang="ts">
import { ref } from "vue";
import type { SearchProps } from "../../types/films";

const props = defineProps<SearchProps>();
const inputText = ref<string>("");
</script>

<template>
  <div class="relative flex w-2/4 m-auto mb-20">
    <input
      class="bg-transparent border-2 border-solid border-white rounded-lg w-full h-10 text-white p-2"
      type="text"
      placeholder="Search Movies"
      v-model="inputText"
      @keyup.enter="props.pageChangeSearch(1, inputText)"
    />
    <svg
      class="absolute right-0 cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      fill="none"
      @click="props.pageChangeSearch(1, inputText)"
    >
      <path
        d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
        stroke="#ffffff"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

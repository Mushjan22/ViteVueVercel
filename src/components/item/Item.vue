<script setup lang="ts">
import { useRouter } from "vue-router";
import type { ItemProps } from "../../types/films";

const props = defineProps<ItemProps>();

const router = useRouter();

function handleClick() {
  router.push({ name: "Movie", params: { id: props.id.toString() } });
}
</script>

<template>
  <div
    class="max-w-80 bg-white rounded-xl shadow-md overflow-hidden flex-col text-center p-2 cursor-pointer"
    @click="handleClick"
  >
    <img
      class="h-96 rounded-lg w-80 object-cover"
      :src="props.src"
      :alt="props.title"
    />
    <div class="p-4">
      <h1 class="text-m font-semibold text-gray-800 truncate">
        {{ props.title }}
      </h1>
    </div>
  </div>
</template>

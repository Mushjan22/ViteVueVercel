<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getFilm } from "../api/films";
import { useRoute } from "vue-router";
import type { CustomFilm } from "../types/films";

const film = ref<CustomFilm | null>(null);
const route = useRoute();

onMounted(async () => {
  const id = route.params.id as string;
  film.value = (await getFilm(id)) || null;
});
</script>
<template>
  <div class="bg-black min-h-screen flex">
    <div
      v-if="film"
      class="bg-white w-max m-auto min-h-full p-20 rounded-3xl shadow-3xl"
    >
      <h1 class="text-center text-3xl">{{ film.Title }}</h1>
      <div class="p-5 text-center flex gap-8 mt-5">
        <div>
          <img class="rounded-2xl" :src="film.Poster" alt="" />
          <p class="mt-2 text-green-800">{{ film.Runtime }}</p>
          <p>Data Relise: {{ film.Released }}</p>
          <p>{{ film.Language }}</p>
        </div>
        <div class="text-start text-xl text-green-600">
          <p>
            Director: <span class="text-black">{{ film.Director }}</span>
          </p>
          <p>
            Writer: <span class="text-black">{{ film.Writer }}</span>
          </p>
          <p>
            Actors: <span class="text-black">{{ film.Actors }}</span>
          </p>
          <div v-if="film.Ratings" class="mt-20 text-black">
            <div v-for="rate in film.Ratings" class="flex gap-5 items-center">
              <p>{{ rate.Source }}</p>
              <p
                class="rounded-full p-3 border-green-600 border-2 border-solid bg-yellow-400"
              >
                {{ rate.Value }}
              </p>
            </div>
          </div>
          <p class="text-2xl mt-5 text-red-400">{{ film.Awards }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

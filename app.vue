<template>
  <div class="address">
    <AutoComplete
      class="address__input"
      v-model="address"
      :suggestions="suggestions"
      @complete="setSuggestions"
    />
    <client-only>
      <YandexMap
        class="address__map"
        :coordinates="INIT_MAP_COORDINATES"
        :detailed-controls="detailedControls"
        :controls="controls"
        @click="setPlacemark"
      >
        <YandexMarker
          :coordinates="coordinates"
          :marker-id="123"
        />
      </YandexMap>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import { getSuggestions } from "@@/utils/dadata-api";
import { YandexMap, YandexMarker } from "vue-yandex-maps";
import { loadYmap } from "vue-yandex-maps";

const controls = ["fullscreenControl"];
const detailedControls = { zoomControl: { position: { right: 10, top: 50 } } };
const INIT_MAP_COORDINATES = [55.75, 37.62];
const coordinates = ref(INIT_MAP_COORDINATES);

const setPlacemark = (e: any) => {
  coordinates.value = e.get("coords");
  console.log(e.get("coords"));
  console.log(coordinates.value);
};

const settings = {
  apiKey: "7a0149dd-1fbd-4f0c-9b2a-3fcc13e1edef",
};

async function onMounted() {
  await loadYmap(settings);
  // здесь доступна переменная ymaps
}

const address = ref("");
const suggestions = ref([]);

async function setSuggestions() {
  const newSuggestions = await getSuggestions(address.value);
  suggestions.value = newSuggestions;
}
</script>

<style lang="scss" scoped>
.yandex-container {
  height: 400px;
}
.address {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;

  &__input {
    margin-bottom: 40px;
  }

  &__map {
    width: 800px;
    height: 500px;
  }
}
</style>

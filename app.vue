<template>
  <div class="address">
    <AutoComplete
      class="address__input"
      v-model="address"
      :suggestions="suggestions"
      @complete="setSuggestions"
    />
    {{ newCoordinates }}
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
import {
  getSuggestions,
  getCoordsByAddress,
  getAddressByCoords,
  getCoords,
} from "@@/utils/dadata-api";
import { YandexMap, YandexMarker } from "vue-yandex-maps";

const controls = ["fullscreenControl"];
const detailedControls = { zoomControl: { position: { right: 10, top: 50 } } };
const INIT_MAP_COORDINATES = [55.75, 37.62];

const coordinates = ref([0, 0]);
const address = ref("");
const suggestions = ref([]);
const newCoordinates = ref([0, 0]);

const setPlacemark = async (e: any) => {
  coordinates.value = e.get("coords");
  console.log(e.get("coords"));
  console.log(coordinates.value);
  const newCoords = await getCoords();
  newCoordinates.value = newCoords;
  console.log(newCoordinates);
};

getAddressByCoords({ lat: 55.76466, lon: 37.61621 });

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

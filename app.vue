<template>
  <div class="address">
    <AutoComplete
      class="address__input"
      v-model="searchBar"
      :suggestions="suggestions"
      @complete="setSuggestions"
      @item-select="setAddress"
      @keydown.enter.stop="setAddress"
    />
    <client-only>
      <YandexMap
        class="address__map"
        :coordinates="coordinates"
        :detailed-controls="MAP_DETAILED_CONTROLS"
        :controls="MAP_CONTROLS"
        @click="setPlacemark"
      >
        <YandexMarker
          :coordinates="coordinates"
          :marker-id="1"
        />
      </YandexMap>
    </client-only>
    <p>Result: {{ addressObject }}</p>
  </div>
</template>
<script setup lang="ts">
import { YandexMap, YandexMarker } from "vue-yandex-maps";
import { cleanerService, suggestionService } from "~/services";

const INIT_MAP_COORDINATES = [55.75, 37.62];
const MAP_CONTROLS = ["fullscreenControl"];
const MAP_DETAILED_CONTROLS = { zoomControl: { position: { right: 10, top: 50 } } };

const searchBar = ref("");
const suggestions = ref([]);
const coordinates = ref(INIT_MAP_COORDINATES);
const customerAddressData = ref(null);

async function setSuggestions() {
  const newSuggestions = await suggestionService.getSuggestions(searchBar.value);
  suggestions.value = newSuggestions;
}

async function setPlacemark(e: any) {
  coordinates.value = e.get("coords");
  const { address, addressData } = await suggestionService.getAddressByCoords(coordinates.value);
  searchBar.value = address;

  customerAddressData.value = addressData;
}

async function setAddress() {
  const { coords, addressData } = await cleanerService.getCoordsByAddress(searchBar.value);
  coordinates.value = coords;

  customerAddressData.value = addressData;
}

const addressObject = computed(() => {
  if (!customerAddressData.value) {
    return null;
  }

  const { city, street, house, geo_lat, geo_lon } = customerAddressData.value;
  return {
    city,
    street,
    house,
    latitude: geo_lat,
    longitude: geo_lon,
  };
});

</script>

<style lang="scss" scoped>
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
    margin-bottom: 40px;
  }
}
</style>

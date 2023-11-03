import type { Axios } from "axios";
const BASE_URL = "https://suggestions.dadata.ru/suggestions/api/4_1/rs";

export default class SuggestionApi {
  constructor(private readonly client: Axios) {}

  async getSuggestions(queryAddress: string) {
    const {
      data: { suggestions },
    } = await this.client.post(BASE_URL + "/suggest/address", { query: queryAddress });

    return suggestions;
  }

  async getAddressByCoords(queryCoords: number[]) {
    const {
      data: { suggestions },
    } = await this.client.post(BASE_URL + "/geolocate/address", {
      lat: queryCoords[0],
      lon: queryCoords[1],
    });

    return suggestions;
  }
}

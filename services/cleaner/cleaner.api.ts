import type { Axios } from "axios";
const BASE_URL = "https://cleaner.dadata.ru/api/v1/clean";

export default class CleanerApi {
  constructor(private readonly client: Axios) {}

  async getCoordsByAddress(query: string) {
    const { data } = await this.client.post(BASE_URL + "/address", [query]);

    return data[0];
  }
}

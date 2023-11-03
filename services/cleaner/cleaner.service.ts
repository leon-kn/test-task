import type { Axios } from "axios";
import CleanerApi from "~/services/cleaner/cleaner.api";

export class CleanerService {
  private api: CleanerApi;

  constructor(client: Axios) {
    this.api = new CleanerApi(client);
  }

  async getCoordsByAddress(queryString: string) {
    const addressData = await this.api.getCoordsByAddress(queryString);
    const coords = [Number(addressData.geo_lat), Number(addressData.geo_lon)];
    return { coords, addressData };
  }
}

import type { Axios } from "axios";
import CleanerApi from "~/services/cleaner/cleaner.api";

export class CleanerService {
  private api: CleanerApi;

  constructor(client: Axios) {
    this.api = new CleanerApi(client);
  }

  getCoordsByAddress(queryString: string) {
    return this.api.getCoordsByAddress(queryString);
  }
}

import type { Axios } from "axios";
import SuggestionApi from "~/services/suggestion/suggestion.api";

export class SuggestionService {
  private api: SuggestionApi;

  constructor(client: Axios) {
    this.api = new SuggestionApi(client);
  }

  async getSuggestions(queryAddress: string) {
    const suggestionsData = await this.api.getSuggestions(queryAddress);
    const suggestions = suggestionsData.map((obj: any) => obj.value);
    return suggestions;
  }

  async getAddressByCoords(queryCoords: number[]) {
    const addresses = await this.api.getAddressByCoords(queryCoords);
    const { value: address, data: addressData } = addresses[0];

    return { address, addressData };
  }
}
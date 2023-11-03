import { axiosClient } from "~/services/core/apiClient";

import { SuggestionService } from "~/services/suggestion/suggestion.service";
import { CleanerService } from "~/services/cleaner/cleaner.service";

export const suggestionService = new SuggestionService(axiosClient);
export const cleanerService = new CleanerService(axiosClient);

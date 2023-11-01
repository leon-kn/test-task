const URL = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const TOKEN = "a9405cb6b7a78f87d58ef55fe6f1f1f0d7f55066";

function fetchData(queryString: string) {
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Token ${TOKEN}`,
    },
    body: JSON.stringify({ query: queryString }),
  };

  return fetch(URL, options as any)
    .then((response) => response.text())
    .catch((error) => console.log("error", error));
}

export async function getSuggestions(queryString: string) {
  const responseData = await fetchData(queryString);
  const suggestionsData = JSON.parse(responseData as string).suggestions;
  const handledSuggestions = suggestionsData.map((obj: any) => obj.value);

  return handledSuggestions;
}

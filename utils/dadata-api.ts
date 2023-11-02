const TOKEN = "a9405cb6b7a78f87d58ef55fe6f1f1f0d7f55066";
const SECRET = "2ab5f188d8625ef12d94dc20ec21cda5ff0b0492";

function fetchData(queryString: string) {
  const URL = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
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

export function getCoordsByAddress() {
  var url = "https://cleaner.dadata.ru/api/v1/clean/address";
  var token = "a9405cb6b7a78f87d58ef55fe6f1f1f0d7f55066";
  var secret = "2ab5f188d8625ef12d94dc20ec21cda5ff0b0492";
  var query = "москва сухонская 11";

  var options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + token,
      "X-Secret": secret,
    },
    body: JSON.stringify([query]),
  };

  fetch(url, options)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

export function getAddressByCoords(queryCoords: object) {
  const URL = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";

  var options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Token ${TOKEN}`,
    },
    body: JSON.stringify(queryCoords),
  };

  return (
    fetch(URL, options as any)
      .then((response) => response.text())
      // .then((result) => console.log(result))
      .catch((error) => console.log("error", error))
  );
}
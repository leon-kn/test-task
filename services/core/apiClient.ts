import axios from "axios";

const TOKEN = "9f555e2fdfae0668c56b7cf20acb4758216677e1";
const SECRET = "abf2753bde478539ee8588ca8c159a58f7c82d91";

export const axiosClient = axios.create({
  headers: {
    Authorization: `Token ${TOKEN}`,
    "X-Secret": SECRET,
  },
});

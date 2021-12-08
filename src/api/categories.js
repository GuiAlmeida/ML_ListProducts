import axios from "axios";
import { _routeListCategories } from "./routers";

export default {
  getCategories: async params => {
    return axios
      .get(_routeListCategories())
      .then(resp => resp.data)
      .catch(err => console.log(err));
  },
};

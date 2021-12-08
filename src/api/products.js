import axios from "axios";
import { _routeListProducts, _routeSearchProducts } from "./routers";

export default {
  getProducts: async params => {
    return axios
      .get(_routeListProducts(params))
      .then(resp => resp.data)
      .catch(err => console.log(err));
  },
  searchProducts: async query => {
    return axios
      .get(_routeSearchProducts(query))
      .then(resp => resp.data)
      .catch(err => console.log(err));
  },
};

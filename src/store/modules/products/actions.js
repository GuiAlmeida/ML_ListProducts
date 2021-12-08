import apiProducts from "@/api/products";
import store from "@/store";

export default {
  async getProducts({ commit }, idCategory) {
    store.commit("loading/setLoading", true);
    const results = await apiProducts.getProducts(idCategory);
    const _results = results.results.map(item => {
      item.is_favorite = false;
      return item;
    });
    const heading = results.filters.map(item => ({ heading: item, paging: results.paging }));
    commit("setProducts", _results);
    commit("setProductsHeading", heading);
    store.commit("loading/setLoading", false);
  },

  async searchProducts({ commit }, query) {
    const results = await apiProducts.searchProducts(query);
    const _results = results.results.map(item => {
      item.is_favorite = false;
      return item;
    });

    const heading = results.filters.map(item => ({ heading: item, paging: results.paging }));

    commit("setProducts", _results);
    commit("setProductsHeading", heading);
  },
};

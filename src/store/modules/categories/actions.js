import apiCategories from "@/api/categories";

export default {
  async getCategories({ commit }) {
    const data = await apiCategories.getCategories();
    commit("setCategories", data);
  },
};

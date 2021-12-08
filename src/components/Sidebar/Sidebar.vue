<script>
import { ref, toRefs, computed } from "vue";
import { useStore } from "vuex";

import Header from "@/components/Header/Header.vue";
import CardList from "@/components/CardList/CardList.vue";

export default {
  components: { Header, CardList },

  props: ["categories"],

  setup(props) {
    const store = useStore();
    const categories = toRefs(props).categories;
    const currentPage = ref(1);
    const showReadMoreb = true;
    const paginatedOrders = computed(() =>
      categories.value.slice(0, currentPage.value * (categories.value.length / 2))
    );

    const searchProducts = function (idCategory) {
      window.scrollTo(0, 0);
      store.dispatch("products/getProducts", idCategory);
    };
    const loadMore = function () {
      this.currentPage++;
    };
    const loadLess = function () {
      this.currentPage--;
    };

    return {
      showReadMoreb,
      currentPage,
      paginatedOrders,
      loadMore,
      loadLess,
      searchProducts,
    };
  },
};
</script>

<template>
  <aside class="sidebar">
    <h1 class="sidebar__title">Categorias</h1>
    <ul class="sidebar__list">
      <li class="sidebar__item" v-for="categorie in paginatedOrders" :key="categorie.id">
        <button class="button button--link p-0" @click="searchProducts(categorie.id)">
          {{ categorie.name }}
        </button>
      </li>
    </ul>
    <button
      class="button button--link sidebar__load-more"
      @click="loadMore"
      v-if="currentPage * (categories.length / 2) < categories.length"
    >
      ver mais
    </button>
    <button class="button button--link sidebar__load-more" @click="loadLess" v-else>
      ver menos
    </button>
  </aside>
</template>

<style lang="scss" scoped>
@import "./styles.scss";
</style>

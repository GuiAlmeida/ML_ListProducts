<script>
import { computed, onMounted, watch } from "vue";
import { useStore } from "vuex";

import Header from "@/components/Header/Header.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import CardList from "@/components/CardList/CardList.vue";

export default {
  components: {
    Header,
    Sidebar,
    CardList,
  },

  setup() {
    const store = useStore();
    onMounted(async () => await store.dispatch("categories/getCategories"));

    watch(
      () => store.state.categories.categories,
      function (value) {
        store.dispatch("products/getProducts", value[0].id);
      }
    );

    return {
      categories: computed(() => store.state.categories.categories),
      products: computed(() => store.state.products.products),
      heading: computed(() => store.state.products.heading),
    };
  },
};
</script>

<template>
  <div class="content-wrapper">
    <Header />
    <div class="products__wrapper">
      <section class="products__grid">
        <Sidebar :categories="categories" />
        <CardList :products="products" :heading="heading" />
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.products {
  &__wrapper {
    display: flex;
    max-width: 1215px;
    height: 100vh;
    width: 100%;
    margin: auto;
    padding: 0 15px;
    display: flex;
    grid-gap: 15px;
    align-content: flex-start;
    justify-content: space-around;
  }
  &__grid {
    padding: 40px 0;
    display: flex;
    grid-gap: 15px;
    width: 100%;
  }
}
</style>

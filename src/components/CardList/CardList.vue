<script>
import { useStore } from "vuex";
import { computed } from "vue";
import IconFavorite from "@/components/Icons/IconFavorite.vue";
import Rating from "@/components/Rating/Rating.vue";
import Loading from "@/components/Loading/Loading.vue";

export default {
  components: { IconFavorite, Rating, Loading },

  props: ["products", "heading"],

  setup() {
    const store = useStore();

    const loading = computed(() => store.state.loading.showLoading);

    const isNumber = function (num) {
      const float = parseFloat(Math.round(num * 100) / 100).toFixed();
      return float.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const isPriced = function (price) {
      const formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      return formatter.format(price);
    };

    return {
      isNumber,
      isPriced,
      loading,
    };
  },

  methods: {
    handleFavoriteProduct(product) {
      product.is_favorite = !product.is_favorite;
    },
  },
};
</script>

<template>
  <section class="card__wrapper">

    <Loading v-if="loading" />

    <div class="card__list-header" v-if="heading.length > 0">
      <h1>
        {{ heading[0].heading.values[0].name }}
      </h1>
      <span class="card__quantity-results"
        >{{ isNumber(heading[0]?.paging.total) }} resultados</span
      >
    </div>

    <div class="card__list">
      <div class="card__item" v-for="product in products" :key="product.id">
        <span
          class="card__favorite"
          :class="[product.is_favorite ? 'card__favorite--is-favorite' : '']"
          @click="handleFavoriteProduct(product)"
        >
          <IconFavorite :is-favorite="product.is_favorite" />
        </span>

        <div class="card__thumbnail">
          <img :src="product.thumbnail" :alt="product.title" />
        </div>
        <div class="card__item-content">
          <h2 class="card__price">
            {{ isPriced(product.price) }}
          </h2>
          <span class="card__free-shipping" v-if="product.shipping?.free_shipping"
            >frete gratis</span
          >
          <h2 class="card__title">
            {{ product.title }}
          </h2>

          <div class="card__rating">
            <Rating />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "./styles.scss";
</style>

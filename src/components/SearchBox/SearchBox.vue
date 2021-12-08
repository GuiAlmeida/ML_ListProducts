<script setup>
import { useStore } from "vuex";
import { watch } from "vue";

const store = useStore();

function updateValue(value) {
  if (value) {
    return store.dispatch("products/searchProducts", value);
  }
}
</script>

<template>
  <section class="search">
    <form class="search__form">
      <input
        class="search__input"
        type="search"
        placeholder="Buscar produtos"
        v-on:input="updateValue($event.target.value)"
      />
    </form>
  </section>
</template>

<style lang="scss" scoped>
@import "./styles.scss";
</style>

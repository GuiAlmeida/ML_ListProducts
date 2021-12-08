<script setup>
import SearchBox from "@/components/SearchBox/SearchBox.vue";
import logo from "@/assets/logo.png";
</script>

<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__logo">
        <img :src="logo" alt="logo" />
      </div>
      <SearchBox />
      <div class="header__actions">
        <router-link to="/login" class="button button--link">Acessar sua conta</router-link>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "./styles.scss";
</style>

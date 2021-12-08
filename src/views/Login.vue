<script setup>
import LoginBox from "@/components/LoginBox/LoginBox.vue";
import logo from "@/assets/logo.png";
</script>

<template>
  <div class="login">
    <div class="login__wrapper">
      <img :src="logo" alt="logo" />
    </div>
  </div>
  <div class="content-wrapper">
    <LoginBox />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/abstracts/variables";
.login {
  text-align: center;
  background: $primary;
  padding: 20px 15px;
  z-index: 1;
  position: relative;
  &__wrapper {
    display: flex;
    max-width: 1215px;
    width: 100%;
    margin: auto;
    align-items: center;
  }
}
</style>

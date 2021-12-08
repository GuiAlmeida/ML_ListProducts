<template>
  <div class="loading__wrapper">
    <div class="loading"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/abstracts/mixins";
@import "@/styles/abstracts/variables";
.loading__wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
}
.loading {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid;
  border-color: $blue-200 rgb(142 142 142 / 10%) rgba(142 142 142 / 10%);
  animation: spin 1s ease infinite;
}
</style>

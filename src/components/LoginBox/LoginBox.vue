<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },

  validations() {
    return {
      form: {
        email: {
          required,
          email,
        },
        password: {
          required,
          min: minLength(6),
        },
      },
    };
  },

  methods: {
    onSubmit() {
      this.v$.form.$touch();
      if (this.v$.form.$invalid) return;

      this.$router.push("/");
    },
  },
};
</script>

<template>
  <div class="login-box__wrapper">
    <h1 class="login-box__heading">Entre</h1>
    <h2 class="login-box__subheading">Faça login na sua conta</h2>
    <form class="login-box__form" @submit.prevent="onSubmit" novalidate>
      <!-- Email -->
      <div
        class="form__input-wrapper mb-15"
        :class="{
          'form__input-wrapper--error':
            v$.form.email.$errors.length && v$.form.email.$dirty,
        }"
      >
        <input
          class="form__input-wrapper--input"
          id="email"
          type="email"
          v-model="v$.form.email.$model"
          autofocus
          name="email"
        />
        <label class="form__input-wrapper--label" for="email" aria-hidden="true"
          >Digite seu e-mail</label
        >
        <div
          class="form__input-wrapper--errors"
          v-if="v$.form.email.$invalid && v$.form.email.$dirty"
        >
          <span v-if="v$.form.email.required.$invalid">O email é obrigatório.</span>
          <span v-if="v$.form.email.email.$invalid"
            >Por favor, insira um e-mail válido.</span
          >
        </div>
      </div>

      <!-- password -->
      <div
        class="form__input-wrapper"
        :class="{
          'form__input-wrapper--error':
            v$.form.password.$errors.length && v$.form.password.$dirty,
        }"
      >
        <input
          class="form__input-wrapper--input"
          id="password"
          type="password"
          v-model="v$.form.password.$model"
          autofocus
          autocomplete="new-password"
        />
        <label class="form__input-wrapper--label" for="password" aria-hidden="true"
          >Digite sua senha</label
        >
        <div
          class="form__input-wrapper--errors"
          v-if="v$.form.password.$invalid && v$.form.password.$dirty"
        >
          <span v-if="v$.form.password.required.$invalid">A senha é obrigatória.</span>
          <span v-if="v$.form.password.min.$invalid"
            >Este campo deve ter pelo menos 6 caracteres</span
          >
        </div>
      </div>

      <button type="submit" class="button button--primary mt-25">Login</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import "./styles.scss";
</style>

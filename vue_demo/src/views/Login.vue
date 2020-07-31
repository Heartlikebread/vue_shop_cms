<template>
  <div class="text-center">
    <loading :active.sync="loading"></loading>
    <form
      class="form-signin"
      autocomplete="off"
      @submit.prevent="OK"
    >
      <img
        class="mb-4"
        src="../assets/logo.png"
        alt=""
        width="72"
        height="72"
      >
      <div class="row">
        <div class="col-12 form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              :class="{ 'is-invalid': $v.account.$error }"
              :placeholder="$t('PH_ACCOUNT')"
              v-model="account"
            />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-user"></span>
              </div>
            </div>
          </div>
        </div>
        <div class=" col-12 form-group ">
          <div class="input-group">
            <input
              type="password"
              class="form-control"
              :class="{ 'is-invalid': $v.password.$error }"
              :placeholder="$t('PH_PASSWORD')"
              v-model="password"
            />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
        </div>
        <button
          class="btn btn-lg btn-primary btn-block"
          type="submit"
        >Sign in</button>
      </div>
    </form>
  </div>
</template>

<style scope>
  .text-center {
    text-align: center !important;
  }
  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
    padding-top: 15%;
  }
</style>

<script>
  import VueLoading from "vue-loading-overlay";
  import "vue-loading-overlay/dist/vue-loading.css";
  import { login } from "@/api/login/login";
  import router from "../router";
  import { required } from "vuelidate/lib/validators";
  import store from "../store";
  export default {
    name: "login",
    data() {
      return {
        title: process.env.VUE_APP_LOGIN_TITLE,
        account: "test",
        password: "test",
        switchLang: "en",
        loading: false,
      };
    },
    components: {
        loading: VueLoading
    },
    validations: {
      account: { required },
      password: { required },
    },
    mounted() {
      this.loading = true;
      try {
        const languageCode = window.navigator.language.toLowerCase(); // en, zh-TW, zh-CN, ja (ref: https://www.metamodpro.com/browser-language-codes)

        switch (languageCode) {
          case "zh-tw":
            this.switchLang = "tw";
            break;
          case "zh-cn":
            this.switchLang = "cn";
            break;
          case "ja":
            this.switchLang = "jp";
            break;
        }

        this.$i18n.locale = this.switchLang;
      } finally {
        this.loading = false;
      }
    },
    methods: {
      async OK() {
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }
        const Params = {
          username: this.account,
          password: this.password,
          lang: this.switchLang,
        };

        this.loading = true;
        try {
          const Response = (await login(Params)).data;
          if (!Response.isSuccess) {
            console.log(Response);
            this.$alertApiError(Response);
            return;
          }

          //存儲storage
          window.sessionStorage.setItem("token", Response.data);
          //set vuex login
          store.commit("setLogin", {
            loginState: true,
            token: "Bearer " + Response.data,
          });

          console.log(store.state.auth.token);
          router.push("/Home");
        } finally {
          this.loading = false;
        }
      },
    },
  };
</script>
<template>
  <div id="wrapper">

    <aside id="sidebar-wrapper">
      <div class="sidebar-brand">
        <h2>Logo</h2>
      </div>
      <ul class="sidebar-nav">
        <li class="active">
          <a href="#"><i class="fa fa-home"></i>Home</a>
        </li>
        <li>
          <a href="#"><i class="fa fa-plug"></i>Plugins</a>
        </li>
        <li>
          <a href="#"><i class="fa fa-user"></i>Users</a>
        </li>
      </ul>
    </aside>

    <div id="navbar-wrapper">
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a
              href="#"
              class="navbar-brand"
              id="sidebar-toggle"
            ><i class="fa fa-bars"></i></a>
          </div>
          <nav
            id="nav"
            class="main-header navbar navbar-expand navbar-white navbar-light"
          >
            <!-- Right navbar links -->
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                >
                  <i class="fas fa-globe"></i>
                  &nbsp;
                  <select v-model="$i18n.locale">
                    <option
                      v-for="lang in langs"
                      :key="lang.value"
                      :value="lang.value"
                    >{{ lang.display }}</option>
                  </select>
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                >
                  <i class="fas fa-user-alt"></i>
                  <span>&nbsp;使用者</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href
                  @click.prevent="logout"
                >
                  <i class="fas fa-sign-out-alt"></i>
                  <span>{{ $t('LOGOUT') }}</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>

    <section id="content-wrapper">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="content-title">Test</h2>
          <p>Lorem ipsum...</p>
        </div>
      </div>
    </section>

  </div>
  <!-- /container -->
  <!-- <div class="wrapper">
    <com-nav />
    <com-menu />
    <div class="content-wrapper">
      <div class="content">
        <div class="container-fluid">
          <h1
            class="display-4"
            v-if="$route.path === '/'"
          >
            {{ $t("WELCOME") }}
          </h1>
          <transition
            name="fade"
            mode="out-in"
          >
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
    <com-footer />

  </div> -->

</template>

<script>
  import "@/assets/js/global.js"; //導入全局樣式
  // import { getValue, postValue } from "@/api/login/login.js";
  import $ from "jquery";
  export default {
    name: "home",
    computed: {
      factoryName() {
        return this.$store.state.factory.factoryName;
      },
      userName() {
        return this.$store.state.auth.user.name;
      },
    },
    components: {},
    data() {
      return {
        langs: [
          { value: "en", display: "English" },
          { value: "tw", display: "繁體中文" },
          { value: "cn", display: "简体中文" },
          { value: "jp", display: "日本語" },
        ],
      };
    },

    mounted() {
      const $button = document.querySelector("#sidebar-toggle");
      const $wrapper = document.querySelector("#wrapper");

      $button.addEventListener("click", (e) => {
        e.preventDefault();
        $wrapper.classList.toggle("toggled");
      });
    },
    methods: {
      logout() {
        window.sessionStorage.clear();
        this.$router.push("/");
      },
    },
  };
</script>

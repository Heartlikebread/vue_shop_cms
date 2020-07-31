
  <template>
  <nav
    id="nav"
    class="main-header navbar navbar-expand navbar-white navbar-light"
  >
    <!-- <a
      class="navbar-brand"
      @click="btnberger()"
      id="sidebar-toggle"
      ref='btn'
    ><i class="fa fa-bars"></i></a> -->
    <a
      class="nav-link"
      data-widget="pushmenu"
      @click="btnberger()"
    >
      <i class="fas fa-bars"></i>
    </a>

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
</template>
<script>
  export default {
    name: "appnav",
    computed: {
      factoryName() {
        return this.$store.state.factory.factoryName;
      },
      userName() {
        return this.$store.state.auth.user.name;
      },
    },
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
    methods: {
      logout() {
        window.sessionStorage.clear();
        this.$router.push("/");
      },

      props: {},
    },
  };
</script>
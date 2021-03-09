<template>
  <div id="Top">
    <mq-layout :mq="['xl']">
      <Sidebar></Sidebar>
    </mq-layout>
    <mq-layout :mq="['l', 'm', 's', 'xs']">
      <Hamburger></Hamburger>
    </mq-layout>
    <transition mode="out-in" @before-enter="beforeEnter">
      <router-view></router-view>
    </transition>

    <Topbtn></Topbtn>

    <footer>
      <p class="copyright" v-html="copy + ' ' + now + ' ' + copyright"></p>
    </footer>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Hamburger from "./components/Hamburger.vue";
import Topbtn from "./components/TopBtn.vue";

export default {
  data() {
    return {
      copy: "&copy; 2020 -",
      now: "",
      copyright: ", H0L1C.",
    };
  },
  created() {
    const d = new Date();
    this.now = d.getFullYear();
  },
  components: {
    Sidebar,
    Hamburger,
    Topbtn,
  },
  methods: {
    beforeEnter() {
      this.$root.$emit("triggerScroll");
    },
  },
};
</script>


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
    <mq-layout :mq="['l', 'm', 's', 'xs']">
      <Topbtn></Topbtn>
    </mq-layout>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Hamburger from "./components/Hamburger.vue";
import Topbtn from "./components/TopBtn.vue";

export default {
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

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}

html {
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

html::-webkit-scrollbar {
  display: none;
}

html,
body {
  background: var(--main-bg);
  margin: 0;
  transition: 0.5s;
  user-select: none;
}

:root {
  --main-text: #353535;
  --main-bg: #fafafa;
  --sub-color: #eb5160;
  --alpha-bg: #fafafaca;
}

h1,
h2,
h3,
h4,
p,
a,
span {
  font-family: "Montserrat", "Noto Sans JP", sans-serif;
  text-decoration: none;
  margin: 0;
  padding: 0;
  color: var(--main-text);
  text-align: center;
}

h2 {
  font-size: 280%;
  position: relative;
  display: inline-block;
  padding: 0 50px;
  left: 50%;
  transform: translateX(-50%);
}

h2::before,
h2::after {
  content: "";
  position: absolute;
  top: 50%;
  display: inline-block;
  width: 34px;
  height: 3px;
  background-color: var(--main-text);
  -webkit-transform: rotate(-60deg);
  transform: rotate(-60deg);
}

h2::before {
  left: 0;
}

h2::after {
  right: 0;
}

.main {
  overflow-y: scroll;
  padding-right: 17px;
  width: calc(100% + 17px);
}

footer {
  margin-top: 160px;
  height: 40px;
  text-align: center;
  position: relative;
  bottom: 0;
  opacity: 0.5;
}
</style>


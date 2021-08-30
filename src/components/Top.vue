<template>
  <div id="main" class="main">
    <transition name="loadingFade">
      <div class="loadingAnim" v-if="loading"></div>
    </transition>
    <p class="version">Ver : {{ ver }}</p>
    <mq-layout :mq="['xl']">
      <Menu></Menu>
    </mq-layout>
    <div class="title" id="Top">
      <h1>STUDIO H0L1C</h1>
      <a href="#">
        <span></span>
      </a>
    </div>

    <About></About>
    <Work :num="workNum" :worksTitle="workTitle"></Work>
    <Skill></Skill>
    <Contact></Contact>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import About from "./About.vue";
import Work from "./Work.vue";
import Skill from "./Skill.vue";
import Contact from "./Contact.vue";

export default {
  data() {
    return {
      loading: true,
      ver: "2.2.3",
      workNum: 5,
      workTitle: "WORKS",
      windowSize: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 300);
  },
  created() {
    this.windowSize = window.innerWidth;
    if (this.windowSize < 614) {
      this.workNum = 8;
    }
  },
  components: {
    Menu,
    About,
    Work,
    Skill,
    Contact,
  },
};
</script>

<style>
.version {
  position: absolute;
  font-size: 12px;
  top: 13px;
  right: 20px;
  opacity: 0.2;
  font-family: "Montserrat";
  font-weight: bold;
  z-index: 9996;
}

.loadingAnim {
  position: fixed;
  width: 100%;
  height: 100vh;
  margin: 0;
  top: 0;
  left: 0;
  background-color: var(--main-bg);
  z-index: 9999 !important;
}

.loadingFade-enter-active,
.loadingFade-leave-active {
  transition: opacity 1s;
}
.loadingFade-enter,
.loadingFade-leave-to {
  opacity: 0;
}

.title {
  position: relative;
  height: 100vh;
}
.title h1 {
  position: absolute;
  width: 80%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 400%;
}

.title a {
  position: absolute;
  top: 55%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.title a span {
  cursor: default;
  position: absolute;
  top: 10px;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 2px solid var(--main-text);
  border-bottom: 2px solid var(--main-text);
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-animation: scrollanim 2s infinite;
  animation: scrollanim 2s infinite;
  box-sizing: border-box;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.caption {
  margin: 20px auto 40px auto;
  font-family: "Noto Sans JP", sans-serif;
  text-decoration: none;
  padding: 0;
  color: var(--main-text);
  text-align: center;
  font-size: 90%;
  opacity: 0.7;
}

.myProfile,
.myIcon,
.profile,
.projectItem,
.contactItem {
  border-radius: 10px;
}

.myProfile,
.projectList,
.skillList,
.contactList,
.eventsList {
  min-width: 640px;
}

@-webkit-keyframes scrollanim {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
@keyframes scrollanim {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}

@media screen and (max-width: 660px) {
  .title h1 {
    font-size: 260%;
  }

  h2 {
    font-size: 200%;
  }
  .myIcon {
    max-height: 240px;
  }

  .myImg {
    max-width: 200px;
  }
}
</style>




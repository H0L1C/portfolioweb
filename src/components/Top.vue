<template>
  <div id="main" class="main">
    <div class="title" id="Home">
      <h1>H0L1C Portfolio</h1>
      <a href="#">
        <span></span>
      </a>
    </div>
    <ul class="menuList">
      <li>
        <p class="HomeLink" v-scroll-to="'#Home'">Home</p>
      </li>
      <li>
        <p
          class="AboutLink"
          v-scroll-to="{
          el:'#About',
          offset:-60,
        }"
        >About</p>
      </li>
      <li>
        <p
          class="WorkLink"
          v-scroll-to="{
          el:'#Work',
          offset:-60,
        }"
        >Work</p>
      </li>
      <li>
        <p
          class="ContactLink"
          v-scroll-to="{
          el:'#Contact',
          offset:-60,
        }"
        >Contact</p>
      </li>
    </ul>

    <h2 id="About">About</h2>
    <dl class="myProfile">
      <dt class="myIcon">
        <div class="myName">
          <h3>H0L1C</h3>
        </div>
        <div class="myImg"></div>
      </dt>
      <dd class="profileText">
        <h3>Profile</h3>
        <p>
          1999年生まれ
          <br />映像・グラフィックデザイン・Webコンテンツなどを制作しています
          <br />ご依頼はTwitterDM・E-mailにて受け付けております
        </p>
        <h3 class="skill">Skill</h3>
      </dd>
      <intersect @enter="play">
        <lottie
          :options="defaultOptions"
          :height="216"
          :width="380"
          v-on:animCreated="lottieAnimation"
          class="lottieCanvas"
        />
      </intersect>
    </dl>

    <h2 id="Work">Work</h2>
    <dl class="projectList">
      <dd v-for="{ id, name } in list" :key="id" class="projectItem">
        <router-link :to="`/project/${ id }`" class="projectLink">{{ name }}</router-link>
      </dd>
    </dl>

    <h2 id="Contact">Contact</h2>
    <dl class="contactList">
      <dd class="contactItem leftItem">
        <a href="https://twitter.com/HLC012" target="_blank" rel="noopener">
          <h3>TwitterDM</h3>
        </a>
        <h4>@HLC012</h4>
      </dd>
      <dd class="contactItem rightItem">
        <a href="#mailgo" data-address="contact" data-domain="h0l1c.work">
          <h3>Mail</h3>
        </a>
        <h4>contact&#64;h0l1c.work</h4>
      </dd>
    </dl>
  </div>
</template>

<style>
.title {
  position: relative;
  height: 100vh;
}
.title h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 400%;
  background: none;
}

.title a {
  position: absolute;
  top: 55%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-decoration: none;
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
  top: 0;
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
}

h2 {
  margin: 80px 0 40px 0;
}

.myProfile,
.projectItem,
.contactItem {
  background-color: var(--alpha-bg);
}

.myProfile,
.myIcon,
.profileText,
.projectItem,
.contactItem {
  border-radius: 10px;
}

.myProfile,
.projectList,
.contactList {
  min-width: 620px;
}

.myProfile {
  position: relative;
  height: 450px;
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.myIcon {
  width: calc(100% - 400px);
  min-width: 240px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}

.myName {
  width: 100%;
  height: 60px;
  background-color: var(--alpha-bg);
  border-radius: 10px 0 0 0;
}

.myName h3 {
  font-size: 260%;
  line-height: 60px;
  text-align: left;
  padding-left: 20px;
  color: var(--main-text);
}

.myImg {
  width: 100%;
  height: calc(100% - 60px);
  background-image: url(../assets/images/myLogo.svg);
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: lighten;
  background-color: var(--alpha-bg);
  border-radius: 0 0 0 10px;
}

.profileText {
  position: absolute;
  width: 384px;
  height: calc(100% - 220px);
  margin: 0;
  right: 0;
  color: var(--main-text);
}

.profileText h3 {
  font-size: 160%;
  padding: 0 10px;
  margin: 20px;
  color: var(--main-text);
  text-align: left;
  border-left: 8px solid;
  border-image: linear-gradient(
      to bottom,
      var(--sub-color) 0% 50%,
      var(--main-text) 50% 100%
    )
    1;
}

.profileText p {
  text-align: left;
  padding: 5px 20px;
}

.skill {
  margin-top: 30px !important;
}

.lottieCanvas {
  position: absolute;
  bottom: 0;
  right: 0;
}

.projectList {
  width: 50%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.projectItem {
  width: calc((100% - 40px) / 2);
  max-width: 350px;
  min-width: 300px;
  height: 350px;
  margin: 20px 0 0 0;
  border: solid 1px var(--main-text);
}

.projectLink {
  display: block;
  height: 350px;
}

.contactList {
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

.contactItem {
  position: relative;
  width: calc((100% - 40px) / 2);
  min-width: 300px;
  height: 120px;
  margin: 20px 0;
}

.contactItem h3 {
  position: relative;
  padding: 10px 30px;
  font-size: 160%;
  height: 30px;
  line-height: 30px;
  color: var(--main-text);
  border: solid 2px;
  border-radius: 2px;
  transition: 0.3s;
}

.contactItem h3:hover {
  color: var(--sub-color);
}

.contactItem h4 {
  font-family: Verdana, Tahoma, sans-serif;
  font-size: 140%;
  margin: 0;
  padding: 0 30px;
  height: 70px;
  line-height: 70px;
  top: 50px;
  color: var(--main-text);
}

.leftItem h3 {
  left: 0;
}

.rightItem h3,
.rightItem h4 {
  right: 0;
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
</style>

<script>
import Lottie from "./lottie.vue";
import * as animationData from "../assets/data.json";
import Intersect from "vue-intersect";
import products from "@/project.js";

export default {
  components: {
    Lottie,
    Intersect
  },
  data() {
    return {
      defaultOptions: { animationData: animationData },
      animationSpeed: 1
    };
  },
  methods: {
    lottieAnimation: function(anim) {
      this.anim = anim;
    },

    play: function() {
      this.anim.play();
    }
  },
  computed: {
    list: () => products.fetch()
  }
};
</script>


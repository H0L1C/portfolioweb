<template>
  <div class="about">
    <h2 id="About">About</h2>
    <div class="myProfile">
      <div class="profile">
        <div class="myName">
          <h3>H0L1C</h3>
        </div>
        <h3 class="profileText">Profile</h3>
        <p>
          1999年生まれ 映像クリエイター
          <br />映像作品・Webコンテンツなどを制作しています <br />ご依頼は
          <a
            href="https://twitter.com/HLC012"
            target="_blank"
            rel="noopener"
            class="contactLinkText"
          >
            TwitterDM</a
          >
          ・
          <a
            href="#mailgo"
            data-address="contact"
            data-domain="h0l1c.work"
            class="contactLinkText"
            >E-mail</a
          >にて受け付けております
        </p>
      </div>
      <div class="myIcon">
        <img src="../assets/images/myLogo.svg" alt="MyIcon" class="myImg" />
      </div>
      <intersect @enter="play">
        <div class="skillSlot">
          <h3 class="skill">Skill</h3>
          <lottie
            :options="defaultOptions"
            v-on:animCreated="lottieAnimation"
            class="lottieCanvas"
            :height="0"
            :width="0"
          />
        </div>
      </intersect>
    </div>
  </div>
</template>

<script>
import Lottie from "./Lottie.vue";
import * as animationData from "../assets/data.json";
import Intersect from "vue-intersect";

export default {
  components: {
    Lottie,
    Intersect,
  },
  data: function () {
    return {
      defaultOptions: { animationData: animationData },
      animationSpeed: 1,
    };
  },

  methods: {
    lottieAnimation: function (anim) {
      this.anim = anim;
    },

    play: function () {
      this.anim.play();
    },
  },
};
</script>

<style>
#About {
  margin-top: 0;
}

.myProfile {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 0.6fr;
  grid-template-rows: 1fr 1fr;
  height: auto;
  max-height: 600px;
  width: 50%;
  margin: auto;
}

.myProfile h3 {
  font-size: 160%;
  padding: 0 10px;
  margin-bottom: 30px;
  color: var(--main-text);
  text-align: left;
}

.myName h3 {
  font-size: 260%;
  line-height: 60px;
  padding: 0;
}

.myIcon {
  position: relative;
  min-width: 300px;
}

.myImg {
  position: absolute;
  width: 80%;
  max-width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.profileText,
.skill {
  border-left: 6px solid var(--sub-color);
}

.profile p {
  text-align: left;
  padding: 0 40px;
  font-family: "Noto Sans JP", sans-serif;
}

.skill {
  margin-top: 60px !important;
}

.skillSlot {
  grid-column: 1/3;
}

.lottieCanvas {
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: auto !important;
  height: auto !important;
  max-width: 80%;
  position: relative;
  top: -15%;
}

.contactLinkText{
  transition: all 0.5s;
}

.contactLinkText:hover {
  color: var(--sub-color);
}
</style>

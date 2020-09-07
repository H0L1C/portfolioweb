<template>
  <div class="about">
    <h2 id="About">About</h2>
    <dl class="myProfile">
      <dt class="profile">
        <div class="myName">
          <h3>H0L1C</h3>
        </div>
        <h3 class="profileText">Profile</h3>
        <p>
          1999年生まれ
          <br />映像・グラフィックデザイン・Webコンテンツなどを制作しています
          <br />ご依頼はTwitterDM・E-mailにて受け付けております
        </p>
      </dt>
      <dt class="myIcon">
        <img src="../assets/images/myLogo.svg" alt="MyIcon" class="myImg" />
      </dt>
      <intersect @enter="play">
        <div class="skillSlot">
          <h3 class="skill">Skill</h3>
          <lottie
            :options="defaultOptions"
            v-on:animCreated="lottieAnimation"
            class="lottieCanvas"
          />
        </div>
      </intersect>
    </dl>
  </div>
</template>

<script>
import Lottie from "./Lottie.vue";
import * as animationData from "../assets/data.json";
import Intersect from "vue-intersect";

export default {
  components: {
    Lottie,
    Intersect
  },
  data: function() {
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
  }
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

</style>

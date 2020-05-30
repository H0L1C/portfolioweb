<template>
  <div>
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
  </div>
</template>

<script>
import Lottie from "./lottie.vue";
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
</style>

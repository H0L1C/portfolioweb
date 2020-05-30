<template>
  <div>
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
        <div class="myImg"></div>
      </dt>
      <intersect @enter="play">
        <div>
          <h3 class="skill">Skill</h3>
          <lottie
            :options="defaultOptions"
            :height="300"
            :width="640"
            v-on:animCreated="lottieAnimation"
            class="lottieCanvas"
          />
        </div>
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

#About{
  margin-top: 0;
}

.myProfile {
  position: relative;
  height: 600px;
  width: 50%;
  margin: auto;
}

.myIcon {
  position: absolute;
  width: 50%;
  height: calc(100% - 300px);
  right: 0;
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
  color: var(--main-text);
}

.myImg {
  width: 100%;
  height: 100%;
  background-image: url(../assets/images/myLogo.svg);
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: lighten;
  background-color: var(--alpha-bg);
  border-radius: 0 0 0 10px;
}

.profile {
  position: absolute;
  width: 50%;
  height: calc(100% - 300px);
  margin: 0;
  left: 0;
  color: var(--main-text);
}

.profileText {
  font-size: 160%;
  padding: 0 10px;
  margin: 20px;
  color: var(--main-text);
  text-align: left;
  border-left: 6px solid var(--sub-color);
  /*border-image: linear-gradient(
      to bottom,
      var(--sub-color) 0% 50%,
      var(--main-text) 50% 100%
    )
    1;*/
}

.profile p {
  text-align: left;
  padding: 0 34px;
}

.skill {
  position: relative;
  font-size: 160%;
  padding: 0 10px;
  top: 320px;
  margin: 20px;
  color: var(--main-text);
  text-align: left;
  border-left: 6px solid var(--sub-color);
  margin-top: 30px;
}

.lottieCanvas {
  position: absolute;
  bottom: 0;
  left: 50%;
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}
</style>

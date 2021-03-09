<template>
  <div class="skill section">
    <hr />
    <h2 id="Skill">SKILL</h2>

    <div class="caption"></div>
    <intersect @enter="play">
      <transition-group class="skillList" name="skillList">
        <div
          class="skillItem"
          :class="{ graphAnim: view }"
          v-bind:key="skill.title"
          v-for="skill in skillList"
        >
          <div class="graph">
            <svg>
              <circle cx="100" cy="100" r="60" />
              <circle cx="100" cy="100" r="60" />
            </svg>
            <img
              class="skillImage"
              v-lazy="skill.img"
              loading="lazy"
              :alt="skill.alt"
              width="50"
              height="50"
              decoding="“async”"
            />
          </div>
          <div class="graphTitle">
            <span class="skillTitle">{{ skill.title }}</span>
          </div>
        </div>
      </transition-group>
    </intersect>
  </div>
</template>

<script>
import Intersect from "vue-intersect";

export default {
  components: {
    Intersect,
  },
  data: function () {
    return {
      view: false,
      skillList: [
        {
          title: "AfterEffects",
          img: require("../assets/images/Ae_Logo.svg"),
          alt: "After Effects icon",
        },
        {
          title: "PremierePro",
          img: require("../assets/images/Pr_Logo.svg"),
          alt: "Premiere Pro icon",
        },
        {
          title: "CharacterAnimator",
          img: require("../assets/images/Ch_Logo.svg"),
          alt: "Character Animator icon",
        },
        {
          title: "TouchDesigner",
          img: require("../assets/images/TD_Logo.png"),
          alt: "TouchDesigner icon",
        },
        {
          title: "XD",
          img: require("../assets/images/Xd_Logo.svg"),
          alt: "Adobe XD icon",
        },
        {
          title: "HTML5",
          img: require("../assets/images/HTML_Logo.svg"),
          alt: "HTML5 icon",
        },
        {
          title: "CSS3",
          img: require("../assets/images/CSS_Logo.svg"),
          alt: "CSS3 icon",
        },
        {
          title: "Vue.js",
          img: require("../assets/images/Vue_Logo.svg"),
          alt: "Vue.js icon",
        },
      ],
    };
  },

  methods: {
    play: function () {
      this.view = true;
    },
    setFilter: function (filter) {
      this.currentFilter = filter;
    },
  },
};
</script>

<style>
.skillList {
  width: 50%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.skillItem {
  display: grid;
  grid-template-rows: 200px 40px;
  width: calc((100% - 40px) / 2);
  max-width: 200px;
  min-width: 200px;
  height: 240px;
  margin: 20px 0 0 0;
  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px #00000026;
  opacity: 0;
}

.skillImage {
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.graph svg {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background-color: #fafafa00;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg) scale(1);
}

.graph {
  position: relative;
  background-color: var(--main-bg);
}

.graphTitle {
  position: relative;
  font-family: "Montserrat";
  font-size: 92%;
  font-weight: bold;
  border-top: solid 2px #20202010;
  border-radius: 0 0 10px 10px;
}

.skillTitle {
  position: absolute;
  color: var(--main-text);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.9;
}

circle {
  fill: transparent;
  stroke-width: 14;
}

circle:nth-child(1) {
  stroke: var(--main-text);
  opacity: 0.1;
}

circle:nth-child(2) {
  stroke: var(--sub-color);
}
.graphAnim .graphTitle,
.graphAnim svg {
  animation: bgc 2s 2.8s ease forwards;
}

.graphAnim:nth-child(1) {
  animation: show 2s ease forwards;
}

.graphAnim:nth-child(2) {
  animation: show 2s 0.1s ease forwards;
}

.graphAnim:nth-child(3) {
  animation: show 2s 0.2s ease forwards;
}

.graphAnim:nth-child(4) {
  animation: show 2s 0.3s ease forwards;
}

.graphAnim:nth-child(5) {
  animation: show 2s 0.4s ease forwards;
}

.graphAnim:nth-child(6) {
  animation: show 2s 0.5s ease forwards;
}

.graphAnim:nth-child(7) {
  animation: show 2s 0.6s ease forwards;
}

.graphAnim:nth-child(8) {
  animation: show 2s 0.7s ease forwards;
}

.graphAnim:nth-child(1) circle:nth-child(2),
.graphAnim:nth-child(4) circle:nth-child(2) {
  animation: circle 3s ease-in-out forwards;
}

.graphAnim:nth-child(2) circle:nth-child(2) {
  animation: circle2 3s 0.1s ease-in-out forwards;
}

.graphAnim:nth-child(3) circle:nth-child(2),
.graphAnim:nth-child(5) circle:nth-child(2),
.graphAnim:nth-child(8) circle:nth-child(2) {
  animation: circle3 3s 0.1s ease-in-out forwards;
}

.graphAnim:nth-child(6) circle:nth-child(2),
.graphAnim:nth-child(7) circle:nth-child(2) {
  animation: circle4 3s 0.1s ease-in-out forwards;
}

@keyframes bgc {
  0% {
    background: var(--alpha-bg);
  }
  100% {
    background-color: var(--sub-bg);
  }
}

@keyframes show {
  0% {
    transform: translate(0, -20px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}

@keyframes circle {
  0% {
    stroke-dasharray: 10 365;
  }
  99.9%,
  to {
    stroke-dasharray: 320 365;
  }
}

@keyframes circle2 {
  0% {
    stroke-dasharray: 10 365;
  }
  99.9%,
  to {
    stroke-dasharray: 200 365;
  }
}

@keyframes circle3 {
  0% {
    stroke-dasharray: 10 365;
  }
  99.9%,
  to {
    stroke-dasharray: 260 365;
  }
}

@keyframes circle4 {
  0% {
    stroke-dasharray: 10 365;
  }
  99.9%,
  to {
    stroke-dasharray: 300 365;
  }
}
</style>
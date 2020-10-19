<template>
  <div>
    <mq-layout :mq="['xl']">
      <WorkMenu></WorkMenu>
    </mq-layout>
    <div
      class="workBody"
      id="workmain"
      v-scroll-lock="scrollLook"
      v-bind:class="{ productBody: move, productBodyActive: moved }"
    >
      <h1>{{ works[id].name }}</h1>
      <div class="description">
        <p class="creationTime">制作期間：　{{ works[id].time }}</p>
      </div>

      <div class="sectionList">
        <div
          class="section"
          v-for="(section, index) in works[id].sections"
          :key="section.title"
        >
          <h2>{{ section.title }}</h2>
          <div class="article">
            <div class="leftParts">
              <img
                v-lazy="section.img"
                loading="lazy"
                :alt="section.alt"
                class="articleImg"
                @click="openModal(index)"
              />
            </div>
            <div class="rightParts">
              <p class="sectionText">{{ section.text1 }}</p>
              <p class="sectionText">{{ section.text2 }}</p>
              <p class="sectionText">{{ section.text3 }}</p>
              <a :href="section.link" target="_blank" rel="noopener">
                <p class="sectionLink">{{ section.linktext }}</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="popup" v-if="popupActive">
        <img
          v-lazy="works[id].sections[num].img"
          :alt="works[id].sections[num].alt"
          class="zoomImg"
          @click="closeModal()"
        />
        <div class="closeBtn" @click="closeModal()">
          <p>CLOSE</p>
        </div>
        <div class="popupBG"></div>
      </div>
    </div>
  </div>
</template>

<script>
import works from "../product.js";
import WorkMenu from "./WorkMenu.vue";
export default {
  components: {
    WorkMenu,
  },
  mixins: [works],
  props: {
    id: Number,
  },
  data: function () {
    return {
      num: "",
      popupActive: false,
      scrollLook: false,
      move: false,
      moved: false,
      entered: false,
    };
  },
  methods: {
    openModal(index) {
      this.num = index;
      this.popupActive = true;
      this.scrollLook = true;
    },
    closeModal() {
      this.popupActive = false;
      this.scrollLook = false;
    },
    enter() {
      this.move = true;
    },
    leave() {
      this.move = false;
      this.moved = true;
      setTimeout(() => {
        this.moved = false;
      }, 500);
    },
  },
  watch: {
    entered: function () {
      this.entered ? this.enter() : this.leave();
    },
  },
  mounted() {
    this.$router.beforeResolve((to, from, next) => {
      scrollTo(0, 0);
      this.entered = true;
      next();
    });
    this.$router.afterEach((to, from, next) => {
      setTimeout(() => {
        this.entered = false;
      }, 260);
    });
  },
};
</script>

<style>
.productBody {
  opacity: 0;
}

.productBodyActive {
  transition: all 0.5s;
  opacity: 1;
}

.workBody {
  width: 60%;
  margin: auto;
}

.workBody h1 {
  font-size: 300%;
  margin: 0 0 30px 0;
  padding: 30px 0 5px 0;
  display: block;
  text-align: left;
  border-bottom: solid 4px var(--sub-color);
}

.workBody h2 {
  font-size: 140%;
  margin: 20px 0;
  padding: 2px 20px;
  border-left: solid 4px var(--sub-color);
  text-align: left;
  left: 0;
  transform: translateX(0);
}

.workBody h2::before,
.workBody h2::after {
  height: 0;
}

.sectionList {
  min-width: 300px;
}

.sectionLink {
  font-family: "Montserrat", sans-serif !important;
  font-weight: bold;
  color: var(--sub-color);
  margin: 20px 0 0 0;
  transition: all 0.3s;
  display: inline-block;
}

.sectionLink:hover {
  color: var(--main-text);
  opacity: 0.8;
}

.sectionText {
  margin: 5px 0;
}

.description {
  margin: 10px 0;
}

.description p {
  font-family: "Noto Sans JP", sans-serif;
  font-size: 90%;
  text-align: right;
  opacity: 0.6;
}

.article {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
}
.leftParts,
.rightParts {
  min-width: 290px;
}

.leftParts {
  min-height: 220px;
}

.articleImg {
  position: relative;
  max-width: 300px;
  max-height: 220px;
  cursor: zoom-in;
}

.rightParts p {
  text-align: left;
  padding: 0 0 0 40px;
  font-family: "Noto Sans JP", sans-serif;
}

.popupBG {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: block;
  background-color: #00000060;
  z-index: 9998;
}

.zoomImg {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 70%;
  max-height: 70%;
  z-index: 9999;
  cursor: zoom-out;
}

.closeBtn {
  position: fixed;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  cursor: pointer;
  transition: all 0.2s ease;
}

.closeBtn:hover {
  opacity: 0.8;
}

.closeBtn p {
  color: var(--main-bg);
  padding: 10px 20px;
  border: solid 2px var(--main-bg);
}
</style>

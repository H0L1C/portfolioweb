<template>
  <div>
    <transition name="loadingFade">
      <div class="loadingAnim" v-if="loading"></div>
    </transition>

    <NotFound v-if="id > idMax" />
    <NotFound v-else-if="id < 0" />
    <div v-else>
      <ul class="topicPath">
        <li class="topicPathLink">
          <router-link to="/">
            <p>Top</p>
          </router-link>
        </li>
        <li class="topicPathLink">
          <router-link to="/Gallery">
            <p>Gallery</p>
          </router-link>
        </li>
        <li class="topicPathCurrent">
          <p>{{ works[id].name }}</p>
        </li>
      </ul>

      <div
        class="workBody"
        id="workmain"
        v-scroll-lock="scrollLook"
        v-bind:class="{ productBody: move, productBodyActive: moved }"
      >
        <h1 class="productTitle">{{ works[id].name }}</h1>
        <div class="description">
          <p v-if="works[id].time">制作期間：{{ works[id].time }}</p>
          <p v-if="works[id].position">担当：{{ works[id].position }}</p>
        </div>
        <div
          class="productImage"
          :style="{ backgroundImage: 'url(' + works[id].image + ')' }"
        ></div>
        <div class="sectionList">
          <div
            class="articleSection"
            v-for="(section, index) in works[id].sections"
            :key="section.title"
          >
            <h2 v-if="section.title">{{ section.title }}</h2>
            <div class="article">
              <div v-if="section.img" class="topParts">
                <img
                  v-lazy="section.img"
                  loading="lazy"
                  :alt="section.alt"
                  class="articleImg"
                  @click="openModal(index)"
                  width="640"
                  height="360"
                  decoding="“async”"
                />
              </div>
              <youtube
                :resize="true"
                :fitParent="true"
                v-if="section.movie"
                :video-id="section.movie"
                class="articleMovie"
              />

              <div class="bottomParts">
                <p v-if="section.text" class="sectionText">
                  {{ section.text }}
                </p>
                <a
                  v-if="section.link"
                  :href="section.link"
                  target="_blank"
                  rel="noopener"
                >
                  <p class="sectionLink">詳細リンク：{{ section.linktext }}</p>
                </a>
                <a v-if="section.DLpath" :href="section.DLpath">
                  <p class="sectionLink">{{ section.DLtext }}</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="btnWrap">
          <router-link to="/Gallery" exact>
            <p class="backBtn">Back to Gallery</p>
          </router-link>
        </div>

        <div class="popup" v-if="popupActive" @click="closeModal()">
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
  </div>
</template>

<script>
import works from "../product.js";
import NotFound from "./NotFound.vue";

export default {
  mixins: [works],
  props: {
    id: Number,
  },
  data() {
    return {
      num: "",
      loading: true,
      idMax: 10,
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
    backPage() {},
  },

  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 100);
  },

  components: {
    NotFound,
  },
};
</script>

<style>
.topicPath {
  position: relative;
  width: 60%;
  height: 60px;
  margin: auto;
  padding: 0;
  display: flex;
  justify-content: left;
}

.topicPath li {
  list-style: none;
  margin: 0 6px;
}

.topicPath li:first-child {
  margin: 0 6px 0 0;
}

.topicPath p {
  position: relative;
  font-size: 90%;
  font-weight: bold;
  padding: 0 0 0 16px;
  margin: 20px 0;
  height: 20px;
  line-height: 20px;
  opacity: 0.7;
}

.topicPath p::after {
  content: "";
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  margin: auto;
  box-sizing: border-box;
  border: 5px solid transparent;
  border-left: 8px solid var(--main-text);
  opacity: 0.7;
}

.topicPathLink p {
  transition: all ease 0.3s;
}

.topicPathLink p:hover {
  opacity: 1;
  color: var(--sub-color);
}

.topicPathCurrent p {
  white-space: nowrap;
  overflow: hidden;
  color: var(--sub-color);
  opacity: 1;
}

.topicPathCurrent p::after {
  opacity: 0.5;
}

.productBody {
  opacity: 0;
}

.productBodyActive {
  transition: all 0.5s;
  opacity: 1;
}

.productImage {
  width: 100%;
  height: 420px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: var(--alpha-bg);
  position: relative;
  z-index: 0;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px #00000026;
  margin: 0 0 60px 0;
}

.productTitle {
  font-size: 1.8rem;
  width: 100%;
  overflow: hidden;
  align-items: center;
  background: var(--sub-color);
  color: var(--main-bg);
  line-height: 40px;
  padding: 10px 0;
  display: flex;
  box-shadow: 0px 1px 3px 0px #00000026;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.productTitle:before,
.productTitle:after {
  content: "";
  flex: 1;
  background: var(--main-bg);
  padding: 3px 0;
  height: 0;
  transform: rotate(45deg);
}

.workBody {
  width: 60%;
  margin: auto;
}

.workBody h2 {
  font-size: 160%;
  margin: 30px 0;
  padding: 2px 20px;
  border-left: solid 3px var(--sub-color);
  text-align: left;
  left: 0;
  transform: translateX(0);
}

.workBody h2::before,
.workBody h2::after {
  height: 0;
}

.sectionList {
  margin: 60px 0 0 0;
}

.sectionLink {
  font-family: "Noto Sans JP", sans-serif;
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
  white-space: pre-wrap;
  word-wrap: break-word;
  line-height: 1.6em;
}

.description {
  margin: 20px 0;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}

.description p {
  font-family: "Noto Sans JP", sans-serif;
  font-size: 90%;
  text-align: left;
  margin: 0 20px 0 0;
  opacity: 0.6;
}

.article {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.articleImg {
  position: relative;
  width: 100%;
  cursor: zoom-in;
  margin: 0 0 30px 0;
  box-shadow: 0px 1px 3px 0px #00000026;
}

.articleMovie {
  margin: 0 0 30px 0;
  box-shadow: 0px 1px 3px 0px #00000026;
}

.bottomParts p {
  text-align: left;
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

.btnWrap {
  position: relative;
  display: flex;
  justify-content: center;
  width: 70%;
  margin: auto;
}

.backBtn {
  margin: 20px 20px 0;
  font-family: "Montserrat", sans-serif;
  font-size: 92%;
  font-weight: bold;
  width: 10%;
  min-width: 240px;
  height: 36px;
  line-height: 36px;
  color: var(--main-text);
  border: solid 2px var(--main-text);
  border-radius: 2px;
  transition: 0.3s;
  cursor: pointer;
  opacity: 0.7;
}

.backBtn:hover {
  color: var(--main-bg);
  border: solid 2px var(--sub-color);
  background-color: var(--sub-color);
  opacity: 1;
}

.articleSection {
  margin-bottom: 60px;
}
</style>

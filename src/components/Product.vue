<template>
  <div>
    <mq-layout :mq="['l','m','s','xs']">
      <SocialIcon></SocialIcon>
    </mq-layout>
    <div class="workBody" id="workmain" v-scroll-lock="scrollLook">
      <h1>{{ works[id].name }}</h1>
      <hr />
      <div class="sectionCenter">
        <p>ここに説明がはいるここに説明がはいるここに説明がはいるここに説明がはいるここに説明がはいる</p>
      </div>
      <div class="sectionList">
        <div class="section" v-for="(section,index) in works[id].sections" :key="section.title">
          <h2>{{section.title}}</h2>
          <div class="article">
            <div class="leftParts">
              <img
                v-lazy="section.img"
                loading="lazy"
                alt
                class="articleImg"
                @click="openModal(index)"
              />
            </div>
            <div class="rightParts">
              <h3>概要</h3>
              <p>{{ section.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="popup" v-if="popupActive">
        <img v-lazy="works[id].sections[num].img" alt class="zoomImg" @click="closeModal()" />
        <div class="closeBtn" @click="closeModal()">
          <p>CLOSE</p>
        </div>
        <div class="popupBG"></div>
      </div>

      <topbtn></topbtn>
    </div>
    <mq-layout :mq="['l','m','s','xs']">
      <ProductBottomMenu></ProductBottomMenu>
    </mq-layout>
  </div>
</template>

<script>
import works from "../product.js";
import topbtn from "./TopBtn.vue";
import SocialIcon from "./SocialIcon.vue";
import ProductBottomMenu from "./ProductBottomMenu.vue";
export default {
  components: {
    topbtn,
    SocialIcon,
    ProductBottomMenu,
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
  },
};
</script>

<style>
.workBody {
  width: 60%;
  margin: auto;
}

.workBody h1 {
  font-size: 300%;
  padding-top: 30px;
  padding-bottom: 5px;
  display: block;
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

.workBody h3 {
  font-size: 140%;
  text-align: left;
  padding: 0 20px;
}

hr {
  width: 20%;
  border: solid 2px var(--sub-color);
}

.sectionCenter {
  width: 60%;
  margin: auto;
  padding-top: 20px;
}
.sectionCenter p {
  text-align: left;
}
.article {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
}
.leftParts,
.rightParts {
  min-width: 300px;
  min-height: 220px;
}

.articleImg {
  position: relative;
  max-width: 320px;
  max-height: 220px;
  cursor: zoom-in;
}

.rightParts p {
  text-align: left;
  padding: 0 30px;
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
  max-width: 80vh;
  max-height: 80vh;
  z-index: 9999;
  cursor: zoom-out;
}

.closeBtn {
  position: fixed;
  top: 70%;
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
@media screen and (max-width: 415px) {
  .workBody {
    width: 90%;
    margin: auto;
  }
  .articleImg {
    max-width: 290px;
    max-height: 220px;
    cursor: zoom-in;
  }
}
</style>

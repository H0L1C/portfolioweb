<template>
  <div class="work section">
    <hr />
    <h2 id="Work">WORKS</h2>
    <p class="caption">2020/11 ~ {{ date }}</p>
    <div class="projectList" name="works">
      <div
        v-for="(work, index) in works"
        :key="work.id"
        class="projectItem"
        :class="[
          { hide: index >= number && more == true },
          { fade: index >= number },
          { heightCon: index >= number && delSpace == true },
        ]"
      >
        <router-link :to="`/Product/${work.id}`" class="projectLink">
          <img v-lazy="work.image" loading="lazy" :alt="work.alt" />
          <h3>{{ work.name }}</h3>
          <p>{{ work.caption }}</p>
        </router-link>
      </div>
      <!--div class="projectItem">
        <a
          href="https://www.behance.net/H0L1C/projects"
          target="_blank"
          rel="noopener"
          class="projectLink"
        >
          <img
            v-lazy="GalleryImage"
            loading="lazy"
            alt="Galleryサムネイル画像"
          />
          <h3>Gallery</h3>
          <p>個人制作作品集</p>
        </a>
      </div-->
    </div>
    <!--p class="moreBtn" @click="toggleBtn">{{ btnText }}<p-->
  </div>
</template>

<script>
import works from "../product.js";
export default {
  data() {
    return {
      GalleryImage: require("../assets/images/Gallery_thumbnail.png"),
      date: "2021/02",
      more: false,
      delSpace: true,
      number: 6,
      btnText: "ReadMore",
    };
  },
  methods: {
    toggleBtn() {
      this.more = !this.more;
      if (!this.more) {
        setTimeout(this.spaceControl, 200);
      } else {
        this.btnText = "Close";
        this.delSpace = false;
      }
    },
    spaceControl() {
      this.delSpace = true;
      this.btnText = "ReadMore";
    },
    updateTime: function () {
      let currentdate = new Date();
      this.date =
        this.zeroPadding(currentdate.getFullYear(), 4) +
        "/" +
        this.zeroPadding(currentdate.getMonth() + 1, 2);
    },
    zeroPadding: function (num, len) {
      let zero = "";

      for (var i = 0; i < len; i++) {
        zero += "0";
      }
      return (zero + num).slice(-len);
    },
  },
  mounted: function () {
    window.onload = this.updateTime;
  },
  mixins: [works],
};
</script>

<style>
.projectList {
  width: 50%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.projectItem {
  width: calc((100% - 40px) / 2);
  max-width: 300px;
  min-width: 300px;
  height: 300px;
  margin: 0 0 40px 0;
  background-color: var(--sub-bg);
  box-shadow: 0px 1px 3px 0px #00000026;
  transition: 0.3s;
}

.projectItem:hover {
  transform: translate(0, -4px);
}

.projectLink {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.projectLink img {
  width: 300px;
  height: 220px;
  border-radius: 10px 10px 0 0;
  opacity: 1;
  transition: 0.3s;
}

.projectLink img:hover {
  opacity: 0.7;
}

.projectLink h3 {
  display: block;
  margin: 0 auto;
  line-height: 45px;
  font-size: 160%;
}

.projectLink p {
  font-size: 90%;
  opacity: 0.7;
  font-family: "Noto Sans JP", sans-serif;
  padding: 2px 0;
}
.fade {
  transition: opacity 1s, visibility 0s ease 1s;
  opacity: 0;
  visibility: hidden;
}

.heightCon {
  height: 0px;
  transform: scaleY(0);
}

.hide {
  transition-delay: 0s;
  opacity: 1;
  visibility: visible;
  height: 300px;
  transform: scaleY(1);
}

.moreBtn {
  position: relative;
  margin: 20px 0;
  padding: 6px 6px;
  font-family: "Montserrat", sans-serif;
  font-size: 100%;
  width: 10%;
  min-width: 200px;
  height: 30px;
  left: 50%;
  transform: translateX(-50%);
  line-height: 30px;
  color: var(--main-text);
  border: solid 1px;
  border-radius: 2px;
  transition: 0.3s;
  cursor: pointer;
  opacity: 0.6;
}

.moreBtn:hover {
  color: var(--sub-color);
  opacity: 1;
}
</style>
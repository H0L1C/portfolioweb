<template>
  <div class="work section">
    <hr />
    <h2 id="Work">{{ worksTitle }}</h2>
    <p class="caption">2020/11 ~ {{ date }}</p>
    <div class="projectList" name="works">
      <div v-for="work in workList" :key="work.id" class="projectItem">
        <router-link :to="`/Product/${work.id}`" class="projectLink">
          <img v-lazy="work.image" loading="lazy" :alt="work.alt" />
          <h3>{{ work.name }}</h3>
          <p>{{ work.caption }}</p>
        </router-link>
      </div>
    </div>
    <div class="moreBtnWrap">
      <router-link
        to="./Gallery"
        v-if="this.$route.path == '/'"
        class="moreBtnLink"
      >
        <p class="moreBtn">{{ btnText }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import works from "../product.js";
export default {
  data() {
    return {
      date: "2021/02",
      btnText: "AllWorks & Events",
    };
  },
  methods: {
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
  computed: {
    workList() {
      return this.works.slice(0, this.num);
    },
  },
  props: ["num", "worksTitle"],
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

.moreBtnWrap {
  position: relative;
  width: 100%;
}
.moreBtn {
  position: absolute;
  margin: 20px 0 0 0;
  font-family: "Montserrat", sans-serif;
  font-size: 92%;
  font-weight: bold;
  width: 10%;
  min-width: 300px;
  height: 36px;
  left: 50%;
  transform: translateX(-50%);
  line-height: 36px;
  color: var(--main-text);
  border: solid 2px var(--main-text);
  border-radius: 2px;
  transition: 0.3s;
  cursor: pointer;
  opacity: 0.7;
}

.moreBtn:hover {
  color: var(--main-bg);
  border: solid 2px var(--sub-color);
  background-color: var(--sub-color);
  opacity: 1;
}
</style>
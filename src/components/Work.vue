<template>
  <div class="work section">
    <hr />
    <h2 id="Work">{{ worksTitle }}</h2>
    <p class="caption timeStamp">2020/11 ~</p>
    <div class="projectList" name="works">
      <div v-for="work in workList" :key="work.id" class="projectItem">
        <router-link :to="`/Product/${work.id}`" class="projectLink">
          <img
            v-lazy="work.image"
            loading="lazy"
            :alt="work.alt"
            width="300"
            height="168.75"
            decoding="“async”"
          />
          <div class="productName">
            <h3>{{ work.name }}</h3>
          </div>
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
      btnText: "AllWorks & Events",
    };
  },

  computed: {
    workList() {
      return this.works.slice(this.num).reverse();
    },
  },
  props: ["num", "worksTitle"],
  mixins: [works],
};
</script>

<style>
.work {
  position: relative;
  height: 100%;
}

.timeStamp {
  letter-spacing: 1px;
}

.projectList {
  width: 50%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0 10px;
}

.projectList::after {
  display: block;
  content: "";
  width: 300px;
}

.projectItem {
  width: 300px;
  height: 280px;
  margin: 20px 0;
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
  height: 168.75px;
  border-radius: 10px 10px 0 0;
  opacity: 1;
  transition: 0.3s;
  box-shadow: 0px 1px 3px 0px #00000006;
}

.projectLink img:hover {
  opacity: 0.7;
}

.productName {
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px auto;
}

.projectLink h3 {
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 700;
  display: block;
  width: 90%;
  font-size: 140%;
  line-height: 1.3;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.projectLink p {
  position: absolute;
  width: 90%;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%, 0);
  font-size: 80%;
  opacity: 0.7;
  font-family: "Noto Sans JP", sans-serif;
  padding: 2px 0;
}

.moreBtnWrap {
  position: relative;
  width: 100%;
  height: 40px;
}
.moreBtn {
  position: absolute;
  margin: 40px 0 0 0;
  font-family: "Montserrat", sans-serif;
  font-size: 92%;
  font-weight: bold;
  width: 12%;
  min-width: 300px;
  height: 36px;
  left: 50%;
  transform: translateX(-50%);
  line-height: 36px;
  color: var(--main-bg);
  border: solid 2px var(--sub-color);
  background-color: var(--sub-color);
  border-radius: 2px;
  transition: 0.3s;
  cursor: pointer;
}

.moreBtn:hover {
  opacity: 0.7;
}
</style>
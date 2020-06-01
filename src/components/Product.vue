<template>
  <div class="workBody">
    <h1>{{ works[id].name }}</h1>
    <hr />
    <div class="sectionCenter">
      <p>ここに説明がはいるここに説明がはいるここに説明がはいるここに説明がはいるここに説明がはいる</p>
    </div>
    <div class="sectionList">
      <div class="section">
        <h2>タイトルタイトル</h2>
        <div class="articleLeft">
          <div class="leftParts">
            <img src="https://placehold.jp/300x220.png" alt class="articleImg" />
          </div>
          <div class="rightParts">
            <h3>概要</h3>
            <p>ここに説明がはいるここに説明がはいるここに説明がはいるここに説明がはいるここに説明がはいる</p>
          </div>
        </div>
      </div>
      <div class="section">
        <h2>タイトルタイトル</h2>
        <div class="articleRight">
          <div class="leftParts">
            <h3>概要</h3>
            <p>ここに説明がはいるここに説明がはいるここに説明がはいるここに説明がはいるここに説明がはいる</p>
          </div>
          <div class="rightParts">
            <img src="https://placehold.jp/300x220.png" alt class="articleImg" />
          </div>
        </div>
      </div>
    </div>
    <topbtn></topbtn>
  </div>
</template>

<script>
import works from "../product.js";
import topbtn from "./topbtn.vue";
export default {
  components: {
    topbtn
  },
  mixins: [works],
  props: {
    id: Number
  }
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
  margin: 0;
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

.section {
  margin: 40px 0;
  margin-bottom: 15%;
  height: 100%;
  min-height: 350px;
}

.articleLeft,
.articleRight {
  margin-top: 30px;
  display: flex;
}

.leftParts,
.rightParts {
  height: 100%;
}

.leftParts {
  position: relative;
  width: 50%;
}

.articleImg {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}

.rightParts > .articleImg {
  left: auto;
  right: 0;
}

.rightParts {
  position: relative;
  width: 50%;
}

.leftParts p,
.rightParts p {
  text-align: left;
  margin-left: 10px;
  padding: 5px 20px;
}
</style>

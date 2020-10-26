<template>
  <div class="work">
    <h2 id="Work">Work</h2>
    <div class="projectList" name="works">
      <div v-for="work in works" :key="work.id" class="projectItem">
        <router-link :to="`/Product/${work.id}`" class="projectLink">
          <img v-lazy="work.image" loading="lazy" :alt="work.alt" />
          <h3>{{ work.name }}</h3>
          <p>{{ work.caption }}</p>
        </router-link>
      </div>
      <div class="projectItem">
        <a
          href="https://www.behance.net/H0L1C/projects"
          target="_blank"
          rel="noopener"
          class="projectLink"
        >
          <img v-lazy="GalleryImage" loading="lazy" alt="Galleryサムネイル画像" />
          <h3>Gallery</h3>
          <p>個人制作作品集</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import works from "../product.js";
export default {
  data() {
    return {
      GalleryImage :require("../assets/images/Gallery_thumbnail.png"),
    };
  },
  mixins: [works],
};
</script>

<style>
.work {
  margin-top: 120px;
}

.projectList {
  width: 50%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  transition: 0.3s;
}

.projectItem {
  width: calc((100% - 40px) / 2);
  max-width: 300px;
  min-width: 300px;
  height: 300px;
  margin: 40px 0 0 0;
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
  border-radius: 10px;
}
.projectLink::before,
.projectLink::after {
  position: absolute;
  bottom: 40px;
  content: "";
  height: 2px;
  display: inline-block;
  width: 0;
  background: var(--sub-color);
  transition: 0.3s;
}

.projectLink::before {
  left: 50%;
}

.projectLink::after {
  right: 50%;
}

.projectLink:hover::before,
.projectLink:hover::after {
  width: 60px;
}

.projectLink h3 {
  padding: -10px 0;
  display: block;
  margin: 0 auto;
  line-height: 40px;
  font-size: 140%;
}

.projectLink p {
  font-size: 90%;
  opacity: 0.7;
  font-family: "Noto Sans JP", sans-serif;
}

.originalProject {
  position: relative;
  width: 300px;
  min-width: 300px;
  margin: 60px auto 0 auto;
  cursor: pointer;
}

.originalProject h3 {
  position: relative;
  padding: 10px 30px;
  font-size: 160%;
  height: 30px;
  line-height: 30px;
  color: var(--main-bg);
  border: solid 2px;
  border-radius: 2px;
  background-color: var(--main-text);
  transition: 0.3s;
}

.originalProject h3:hover {
  color: var(--main-textr);
  background-color: var(--main-bg);
  border: solid 2px;
}
</style>
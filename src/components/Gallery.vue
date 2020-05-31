<template>
  <div id="main" class="main">
    <h1>H0L1C Gallery</h1>
    <div class="gallery">
      <div class="projects" name="images">
        <div
          class="project"
          v-bind:key="img.title"
          v-for="(img,index) in images"
          @click="show(index)"
        >
          <div class="project-image-wrapper">
            <img v-lazy="img.thumb" loading="lazy" alt="Project image" />
          </div>
        </div>
      </div>
      <light-box ref="lightbox" :media="images" :show-light-box="false" :show-caption="false"></light-box>
    </div>
    <topbtn></topbtn>
  </div>
</template>

<script>
import images from "../gallery.js";
import topbtn from "./topbtn.vue";
import lightBox from "vue-image-lightbox";
export default {
  components: {
    topbtn,
    lightBox
  },
  mixins: [images],
  methods: {
    show: function(index) {
      this.$refs.lightbox.showImage(index);
    },
  }
};
</script>

<style scoped>
h1 {
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 1;
  background-color: var(--main-bg);
  filter: drop-shadow(0 0 4px rgba(35, 35, 35, 0.2));
}

.gallery {
  margin-top: 100px;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
}

.project {
  position: relative;
  width: 640px;
  height: 360px;
  margin: 30px 30px;
  border-radius: 10px;
}

.project img {
  position: absolute;
  display: block;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  transition: opacity 0.3s ease;
  cursor: pointer;
  box-shadow: 5px 5px 5px -7px #353535;
}
[lazy="loading"] {
  opacity: 0;
}

[lazy="loaded"] {
  opacity: 1;
}
</style>



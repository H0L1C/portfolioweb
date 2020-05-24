<template>
  <div id="main" class="main" v-scroll-lock="look">
    <h1>H0L1C Gallery</h1>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 60" class="BG">
      <path d="M0 0h1920v60H0z" />
    </svg>
    <div class="gallery">
      <div class="projects" name="projects">
        <div
          class="project"
          v-bind:key="project.title"
          v-for="project in projects"
          @click="modalOpen(project); toggoleLook()"
        >
          <div class="project-image-wrapper">
            <img
              class="project-image lazyload"
              v-bind:src="project.image"
              loading="lazy"
              alt="Project image"
            />
            <span class="project-title">
              <p>{{project.title}}</p>
            </span>
          </div>
        </div>
        <modal :list="Item" v-show="showContent" @close="modalClose" />
      </div>
    </div>
  </div>
</template>

<style>
h1 {
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 1;
  background-color: var(--main-bg);
}

.BG {
  position: fixed;
  width: 100%;
  stroke: none;
  left: 0;
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
  z-index: -9999;
}

.project {
  width: 300px;
  height: 300px;
  margin: 10px 30px;
  cursor: pointer;
}
</style>

<script>
import Modal from "./Modal.vue";

export default {
  components: {
    Modal
  },
  data() {
    return {
      showContent: false,
      lock: true,
      look: false,
      Item: "",
      projects: [
        {
          title: "Artwork",
          image: "https://placehold.jp/200x200.png",
          name: "let's try Vue.js",
          detail: "study JS, CoffeeScript, ES6, TypeScript.",
          anime: "Image/test.jpg"
        },
        {
          title: "hoge",
          image: "https://placehold.jp/200x200.png",
          name: "let's try Vue.js",
          detail: "study JS, CoffeeScript, ES6, TypeScript.",
          anime: "Image/test.jpg"
        },
        {
          title: "3",
          image: "https://placehold.jp/200x200.png",
          name: "let's try Vue.js",
          detail: "study JS, CoffeeScript, ES6, TypeScript.",
          anime: "Image/test.jpg"
        },
        {
          title: "4",
          image: "https://placehold.jp/200x200.png",
          name: "let's try Vue.js",
          detail: "study JS, CoffeeScript, ES6, TypeScript.",
          anime: "Image/test.jpg"
        },
        {
          title: "5",
          image: "https://placehold.jp/200x200.png",
          name: "let's try Vue.js",
          detail: "study JS, CoffeeScript, ES6, TypeScript.",
          anime: "Image/test.jpg"
        },
        {
          title: "6",
          image: "https://placehold.jp/200x200.png",
          name: "let's try Vue.js",
          detail: "study JS, CoffeeScript, ES6, TypeScript.",
          anime: "Image/test.jpg"
        },
        {
          title: "7",
          image: "https://placehold.jp/200x200.png",
          name: "let's try Vue.js",
          detail: "study JS, CoffeeScript, ES6, TypeScript.",
          anime: "Image/test.jpg"
        },
        {
          title: "8",
          image: "https://placehold.jp/200x200.png",
          name: "let's try Vue.js",
          detail: "study JS, CoffeeScript, ES6, TypeScript.",
          anime: "Image/test.jpg"
        },
        {
          title: "9",
          image: "https://placehold.jp/200x200.png",
          name: "let's try Vue.js",
          detail: "study JS, CoffeeScript, ES6, TypeScript.",
          anime: "Image/test.jpg"
        }
      ]
    };
  },
  methods: {
    modalOpen(project) {
      this.showContent = true;
      this.Item = project;
    },
    modalClose() {
      this.showContent = false;
      this.look = false;
    },
    toggoleLook: function() {
      if (this.look == true) this.look = false;
      else this.look = true;
    }
  }
};
</script>

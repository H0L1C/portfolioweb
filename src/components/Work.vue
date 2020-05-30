<template>
  <div>
    <h2 id="Work">Work</h2>
    <dl class="projectList" name="works">
      <dd v-for="work in works" :key="work.id" class="projectItem">
        <router-link :to="work.name" class="projectLink">
          <img class="lazyload" :src="work.image" loading="lazy" alt="My works images" />
        </router-link>
      </dd>
    </dl>
  </div>
</template>

<script>
import works from "../product.js";
export default {
  mixins: [works]
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
  max-width: 350px;
  min-width: 300px;
  height: 260px;
  margin: 20px 0 0 0;
  border: solid 1px var(--main-text);
}

.projectLink {
  display: block;
  height: 100%;
}
</style>
<template>
  <ul class="workMenuList" name="works">
    <li>
      <router-link to="/">
        <p>Top</p>
      </router-link>
    </li>
    <li v-for="work in works" :key="work.id">
      <router-link :to="`/Product/${work.id}`" active-class="activeList">
        <p>{{ work.name }}</p>
      </router-link>
    </li>
  </ul>
</template>

<script>
import works from "../product.js";
export default {
  mixins: [works],
};
</script>

<style>
.workMenuList {
  position: fixed;
  display: inline-block;
  top: 60px;
  right: 20px;
  padding: 0.5em 1.5em 0.5em 1.5em;
  z-index: 9998;
}

.workMenuList li {
  list-style: none;
  line-height: 1.5;
  margin: 12px 0;
  padding: 0;
  cursor: pointer;
}

.activeList p {
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  font-size: 150%;
  font-weight: bold;
  color: var(--sub-color);
}

.workMenuList p {
  text-align: right;
}
</style>
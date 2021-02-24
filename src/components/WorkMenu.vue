<template>
  <div class="workMenu">
    <ul class="workMenuList" name="works">
      <li v-for="work in works" :key="work.id">
        <router-link :to="`/Product/${work.id}`" active-class="activeList">
          <div class="numberBox">
            <p>{{ work.id + 1 }}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import works from "../product.js";
export default {
  mixins: [works],
  computed: {},
};
</script>

<style>
.workMenu {
  height: 100px;
}

.workMenuList {
  display: flex;
  justify-content: center;
  margin: 0 0 100px 0;
  padding: 0;
}

.workMenuList li {
  position: relative;
  list-style: none;
}

.workMenuList p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.numberBox {
  position: relative;
  width: 30px;
  height: 30px;
  margin: 0 10px;
  border: solid 2px #20202010;
  cursor: pointer;
}

.numberBox :hover {
  color: var(--sub-color);
}

.activeList p {
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  color: var(--sub-color);
}
</style>
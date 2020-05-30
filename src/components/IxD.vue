<template>
  <div class="hoge">
    <p>{{ works[0].name }}</p>
  </div>
</template>
<script>
import works from "../product.js";
export default {
  mixins: [works],
};
</script>
<style>
.hoge {
  height: 100vh;
}
</style>

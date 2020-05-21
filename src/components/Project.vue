<template>
  <div class="product" v-if="item" key="project">
    <h1>商品情報</h1>
    <dl class="product-table">
      <dt>商品名</dt>
      <dd>{{ item.name }}</dd>
      <dt>価格</dt>
      <dd>{{ item.price }}円</dd>
      <dt>商品説明</dt>
      <dd>{{ item.content }}</dd>
    </dl>
  </div>
</template>

<style>
.loadText {
  font-family: "Montserrat", sans-serif;
}
</style>

<script>
import project from "@/project.js";
export default {
  props: {
    id: Number
  },
  data() {
    return {
      item: null
    };
  },
  watch: {
    id: {
      handler() {
        project.asyncFind(this.id, item => {
          this.item = item;
        });
      },
      immediate: true
    }
  }
};
</script>

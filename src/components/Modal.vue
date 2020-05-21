<template>
  <div class="overlay">
    <div class="content" >
      <img :src="list.image" class="lazyload"> 
      <p>説明：{{ list.title }}</p>
      <p>作業範囲：{{ list.range }}</p>
      <p>使用技術：{{ list.lang }}</p>
      <button @click="$emit('close')">閉じる</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["list"]
};
</script>

<style>
.overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  z-index: 9999;
  width: 50%;
  padding-top: 5em;
  padding-bottom: 5em;
  text-align: center;
}

</style>
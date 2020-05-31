<template>
  <div class="topBtn" v-scroll-to="'#main'" v-bind:class="{ show: show }">
    <a href="#">
      <span></span>
    </a>
  </div>
</template>
<style>
.topBtn {
  position: fixed;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
  opacity: 0;
  transition: 0.5s ease;
  visibility: hidden;
}

.show {
  opacity: 1;
  visibility: visible;
}

.topBtn a span {
  cursor: default;
  position: absolute;
  top: 40%;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1px solid var(--main-text);
  border-bottom: 1px solid var(--main-text);
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
  box-sizing: border-box;
  cursor: pointer;
}
</style>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.show = window.scrollY > 200;
    });
  }
};
</script>
<template>
  <div
    class="topBtn"
    v-scroll-to="{
      el: '#Top',
      offset: -60,
    }"
    v-bind:class="{ show: show }"
  >
    <a href="#">
      <span></span>
      <span></span>
    </a>
  </div>
</template>
<style>
.topBtn {
  position: fixed;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  right: 20px;
  bottom: 13px;
  opacity: 0;
  transition: 0.5s ease;
  visibility: hidden;
  z-index: 11;
  cursor: pointer;
  background-color: var(--sub-bg);
}

.show {
  opacity: 1;
  visibility: visible;
}

.topBtn a span {
  position: absolute;
  top: 50%;
  left: 0;
  width: 20px;
  height: 4px;
  background-color: var(--main-text);
  border-radius: 4px;
  cursor: pointer;
}

.topBtn a span:nth-child(1) {
  transform: translateX(17px) rotate(45deg);
}

.topBtn a span:nth-child(2) {
  transform: translateX(5px) rotate(-45deg);
}
</style>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.show = window.scrollY > 200;
    });
  },
};
</script>
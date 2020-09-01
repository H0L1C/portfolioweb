<template>
  <div>
    <div class="bottomMenu">
      <ul class="bottomMenuList">
        <li>
          <p class="HomeLink" v-scroll-to="'#Home'">Home</p>
        </li>
        <li>
          <p
            class="AboutLink"
            v-scroll-to="{
          el:'#About',
          offset:-60,
        }"
          >About</p>
        </li>
        <li>
          <p
            class="WorkLink"
            v-scroll-to="{
          el:'#Work',
          offset:-60,
        }"
          >Work</p>
        </li>
        <li>
          <p
            class="ContactLink"
            v-scroll-to="{
          el:'#Contact',
          offset:-60,
        }"
          >Contact</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.bottomMenu {
  position: fixed;
  z-index: 9997;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: var(--main-bg);
  -webkit-filter: drop-shadow(1px 3px 5px rgba(0, 0, 0, 0.2));
  -moz-filter: drop-shadow(1px 3px 5px rgba(0, 0, 0, 0.2));
  -ms-filter: drop-shadow(1px 3px 5px rgba(0, 0, 0, 0.2));
  filter: drop-shadow(1px 3px 5px rgba(0, 0, 0, 0.2));
}

.bottomMenuList {
  display: flex;
  justify-content: space-around;
  padding: 0;
}

.bottomMenuList li {
  list-style: none;
  line-height: 1.5;
  cursor: pointer;
}

.bottomMenuList p {
  color: var(--main-text);
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.bottomMenu p,
.bottomMenu span {
  padding: 10px;
  transform: translateY(-10px);
}
</style>

<script>
export default {};
</script>
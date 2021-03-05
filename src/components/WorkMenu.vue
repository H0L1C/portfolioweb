<template>
  <ul class="menuList">
    <li>
      <p
        class="allWorks"
        v-scroll-to="{
          el: '#Work',
          offset: -60,
        }"
      >
        ALL WORKS
      </p>
    </li>
    <li>
      <p
        class="events"
        v-scroll-to="{
          el: '#events',
          offset: -60,
        }"
      >
        EVENTS
      </p>
    </li>
  </ul>
</template>

<style>
.menuList {
  position: fixed;
  display: inline-block;
  top: 60px;
  right: 20px;
  border-top: solid 1px;
  border-bottom: solid 1px;
  padding: 0.5em 1.5em 0.5em 1.5em;
  z-index: 9998;
}

.menuList li {
  list-style: none;
  line-height: 1.5;
  margin: 1px 0;
  padding: 0.4em 0;
  cursor: pointer;
}

.allWorks:hover,
.events:hover {
  color: var(--sub-color);
}

.menuList p,
span {
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
</style>
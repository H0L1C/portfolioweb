<template>
  <ul class="menuList">
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
      <p class="WorkLink" v-scroll-to="{
          el:'#Work',
          offset:-60,
        }">Work</p>
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
  z-index: 9999;
}

.menuList li {
  list-style: none;
  line-height: 1.5;
  margin: 1px 0;
  padding: 0.4em 0;
  cursor: pointer;
}

.HomeLink:hover,
.AboutLink:hover,
.WorkLink:hover,
.GalleryLink:hover,
.ContactLink:hover {
  color: var(--sub-color);
}

.menuList p {
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
</style>
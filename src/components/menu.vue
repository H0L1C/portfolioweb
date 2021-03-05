<template>
  <ul class="menuList">
    <li>
      <p
        class="AboutLink"
        v-scroll-to="{
          el: '#About',
          offset: -60,
        }"
      >
        ABOUT
      </p>
    </li>
    <li>
      <p
        class="WorkLink"
        v-scroll-to="{
          el: '#Work',
          offset: -60,
        }"
      >
        WORKS
      </p>
    </li>
    <li>
      <p
        class="SkillLink"
        v-scroll-to="{
          el: '#Skill',
          offset: -60,
        }"
      >
        SKILL
      </p>
    </li>
    <li>
      <p
        class="ContactLink"
        v-scroll-to="{
          el: '#Contact',
          offset: -60,
        }"
      >
        CONTACT
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

.AboutLink:hover,
.WorkLink:hover,
.SkillLink:hover,
.ContactLink:hover {
  color: var(--sub-color);
}

.menuList p,
span {
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
</style>
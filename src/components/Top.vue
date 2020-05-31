<template>
  <div id="main" class="main">
    <Menu></Menu>
    <div class="title" id="Home">
      <h1>H0L1C Portfolio</h1>
      <a href="#">
        <span></span>
      </a>
    </div>

    <About></About>
    <Work></Work>
    <Contact></Contact>
  </div>
</template>

<style>
.title {
  position: relative;
  height: 100vh;
}
.title h1 {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 400%;
}

.title a {
  position: absolute;
  top: 55%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.title a span {
  cursor: default;
  position: absolute;
  top: 0;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 2px solid var(--main-text);
  border-bottom: 2px solid var(--main-text);
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-animation: scrollanim 2s infinite;
  animation: scrollanim 2s infinite;
  box-sizing: border-box;
}

h2 {
  margin: 120px 0 40px 0;
}

.myProfile,
.projectItem,
.contactItem {
  background-color: var(--alpha-bg);
}

.myProfile,
.myIcon,
.profile,
.projectItem,
.contactItem {
  border-radius: 10px;
}

.myProfile,
.projectList,
.contactList {
  min-width: 640px;
}

@-webkit-keyframes scrollanim {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
@keyframes scrollanim {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
</style>

<script>
import Menu from "./menu.vue";
import About from "./About.vue";
import Work from "./Work.vue";
import Contact from "./Contact.vue";

export default {
  components: {
    Menu,
    About,
    Work,
    Contact
  }
};
</script>


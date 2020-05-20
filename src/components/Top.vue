<template>
  <div id="main" class="main">
    <div class="title">
      <h1>H0L1C Portfolio</h1>
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.12 23.56" class="arrow">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1l21.56 21.56M44.12 1L22.56 22.56"
          />
        </svg>
      </a>
    </div>
    <ul class="menuList">
      <li>
        <p class="HomeLink" v-scroll-to="'#Home'">Home</p>
      </li>
      <li>
        <p class="AboutLink" v-scroll-to="'#About'">About</p>
      </li>
      <li>
        <p class="WorkLink" v-scroll-to="'#Work'">Work</p>
      </li>
      <li>
        <p class="ContactLink" v-scroll-to="'#Contact'">Contact</p>
      </li>
    </ul>
    <h2 id="About">About</h2>
    <h2 id="Work">Work</h2>
    <h2 id="Contact">Contact</h2>
  </div>
</template>

<style>
.title {
  position: relative;
  height: 100vh;
}
.title h1 {
  position: absolute;
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
  text-decoration: none;
}

.arrow {
  cursor: default;
  position: absolute;
  top: 0;
  left: 50%;
  width: 30px;
  height: 30px;
  margin-left: -12px;
  -webkit-animation: scrollanim 2s infinite;
  animation: scrollanim 2s infinite;
  box-sizing: border-box;
}

.borderDark {
  border-color: var(--main-bg) !important;
}

@-webkit-keyframes scrollanim {
  0% {
    -webkit-transform: translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: translate(0, 20px);
    opacity: 0;
  }
}
@keyframes scrollanim {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(0, 20px);
    opacity: 0;
  }
}
</style>

<script>
export default {
  data() {
    return {};
  }
};
</script>


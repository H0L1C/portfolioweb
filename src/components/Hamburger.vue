<template>
  <div id="headerWrap" v-scroll-lock="look">
    <div
      class="js-modal-bk"
      @click="modalBkClick"
      :class="{ active: modal_bk }"
    ></div>
    <header class="header" :class="{ active: bgOpacty }">
      <div class="headerInner">
        <div
          id="js-open-menu"
          class="headerMenu"
          @click="mainMenuToggle"
          :class="{ active: headerMenu_state }"
        >
          <span class="headerMenuLine"></span>
          <span class="headerMenuLine"></span>
          <span class="headerMenuLine"></span>
        </div>

        <div
          class="headerMenuInner"
          :class="{ active: headerMenu_state }"
          @click="modalBkClick"
        >
          <ul class="headerMenuList">
            <li class="menuText">
              <router-link to="/" active-class="currentPage" exact>
                <span>Top</span>
              </router-link>
            </li>
            <li class="menuText">
              <a
                href="https://www.behance.net/H0L1C/projects"
                target="_blank"
                rel="noopener"
              >
                <span>Gallery</span>
              </a>
            </li>
          </ul>

          <hr />

          <ul class="snsIcon">
            <li>
              <a
                href="https://twitter.com/HLC012"
                target="_blank"
                rel="noopener"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 490 398.04"
                >
                  <defs />
                  <path
                    fill="#fafafa"
                    d="M489.22 47.9c.18-.27.39-.51.57-.78a200.09 200.09 0 01-45.47 13.9c-3.79.57-7.6 1.06-11.46 1.36a100.81 100.81 0 0037.65-41.48 107.46 107.46 0 006-13.09l-.59.31c.08-.26.24-.49.32-.76a201.1 201.1 0 01-63.81 24.38 100.42 100.42 0 00-171.55 89.8c.09.62.14 1.22.22 1.84A284.81 284.81 0 0153 39.33a279.77 279.77 0 01-18.48-20.68c0 .05 0 .1-.07.15l-.37-.41a100.23 100.23 0 0018 123.47 107 107 0 0012.38 10.62 100.22 100.22 0 01-44.78-12.46v1.26c0 40.49 24.12 75.11 58.63 91a102.24 102.24 0 0021.09 7.68 100.33 100.33 0 01-25.58 3.35 99.81 99.81 0 01-16.7-1.59c-.56-.16-1.17-.2-1.72-.38 0 .08.07.15.09.22-.19 0-.4 0-.58-.06a100.68 100.68 0 0077.78 68.2 105 105 0 0015.66 1.9A201.6 201.6 0 0124 354.3c-6.52 0-12.91-.53-19.27-1.13-1.47-.26-3-.36-4.43-.71.28.17.58.32.85.5-.37 0-.75 0-1.12-.07A284.35 284.35 0 00154 398.02c102.16 0 178.56-46.81 226.63-111 .15-.22.33-.41.49-.62a299.2 299.2 0 0012.89-19c.83-1.32 1.76-2.58 2.57-3.91a297.4 297.4 0 0010.4-18.9c.82-1.59 1.74-3.12 2.53-4.73q5.72-11.66 10.34-23.66l.12-.28c13.13-34 20-69.5 20-103.74q0-6.54-.29-13A203.86 203.86 0 00481 59.08c3.08-3.77 6.13-7.56 9-11.49l-.78.31z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/h0l1c2/"
                target="_blank"
                rel="noopener"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 486.26 486.49"
                >
                  <defs />
                  <path
                    fill="#fafafa"
                    d="M484.1 351.96c-1.46 30.69-10 59.4-29.72 83.85-22 27.21-51.1 42.21-85.21 46.29-24.73 3-49.8 3.64-74.73 4-39.66.59-79.33.44-119-.11-24.43-.33-49-.34-72.95-6.55-54.65-14.19-87.23-49.59-97.2-104.69-3.8-21-4.49-42.72-4.82-64.14-.68-44.82-.54-89.67-.06-134.47.26-24.78.28-49.71 6.63-74 14.25-54.41 49.6-86.86 104.47-96.82 21-3.81 42.71-4.51 64.12-4.84 45-.7 90-.56 135-.07 24.61.26 49.37.3 73.45 6.6 54.4 14.22 86.92 49.51 96.91 104.4 3.81 21 4.15 42.71 4.89 64.13.79 22.64.18 45.33.18 68zm-42-109.08c0-20.16.39-40.34-.12-60.5-.48-19-.95-38-3.14-56.82-4.85-41.72-30-69.31-70.58-76.7-17.58-3.2-35.75-4-53.68-4.3-44-.62-88-.58-132-.19a541.48 541.48 0 00-56.82 3.08c-42 4.84-69.66 30.09-77 70.87-3.13 17.44-4 35.44-4.24 53.2-.61 44.16-.58 88.34-.18 132.5a533.55 533.55 0 003.11 56.83c4.85 41.71 30 69.31 70.58 76.7 17.58 3.2 35.75 4 53.68 4.29 44 .63 88 .59 132 .2 19-.17 38-1.19 56.82-3.09 18.34-1.86 35.24-8.24 49.51-20.61 20.13-17.46 28.48-40.56 29.81-66.05"
                  />
                  <path
                    fill="#fafafa"
                    d="M242.91 368.14c-69 0-124.76-56.06-124.69-125.34.07-69 56.1-124.66 125.43-124.59 68.92.07 124.54 56.2 124.44 125.58-.1 68.72-56.16 124.41-125.18 124.35zm81.12-124.8c0-44.35-36.25-81-80.12-81-44.88 0-81.6 36-81.63 80 0 45.14 36 81.77 80.37 81.77 44.94.03 81.38-36.17 81.38-80.77z"
                  />
                  <path
                    fill="#fafafa5"
                    d="M373.03 84.23a29.3 29.3 0 01-.12 58.6c-16.06.11-29.66-13.59-29.41-29.65a29.4 29.4 0 0129.53-28.95z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#mailgo" data-address="contact" data-domain="h0l1c.work">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 490 358.26"
                >
                  <defs />
                  <path
                    fill="#fafafa"
                    d="M475.23 0H14.77A14.78 14.78 0 000 14.79v29.08l245 164.18L490 43.86V14.79A14.78 14.78 0 00475.23 0z"
                  />
                  <path
                    fill="#fafafa"
                    d="M0 104.5v194.63a59.1 59.1 0 0059.13 59.11h371.74A59.1 59.1 0 00490 299.13V104.48L245 268.67z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      look: false,
      headerMenu_state: false,
      modal_bk: false,
      bgOpacty: false,
    };
  },

  methods: {
    mainMenuToggle: function () {
      if (this.headerMenu_state == true) {
        this.headerMenu_state = false;
        this.modal_bk = false;
        this.bgOpacty = false;
        this.look = false;
        return;
      }
      this.headerMenu_state = true;
      this.modal_bk = true;
      this.bgOpacty = true;
      this.look = true;
    },
    modalBkClick: function () {
      this.headerMenu_state = false;
      this.modal_bk = false;
      this.bgOpacty = false;
      this.look = false;
    },
  },
};
</script>

<style>
.js-modal-bk {
  opacity: 0;
  visibility: hidden;
  position: fixed;
  z-index: 12;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #353535ee;
  transition: all 0.3s;
}

.js-modal-bk.active {
  opacity: 1;
  visibility: visible;
  height: 100vh;
  overflow: hidden;
}

.header {
  position: fixed;
  z-index: 12;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  background: var(--main-bg);
}

.header ul,
.header li {
  list-style: none;
}

.header.active {
  background: #00000000;
}

.headerMenu {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  width: 44px;
  height: 46px;
  padding: 13px 10px;
  transition: all 0.4s;
  box-sizing: border-box;
  cursor: pointer;
}
.headerMenu .headerMenuLine {
  display: block;
  width: 15px;
  height: 2px;
  margin: 0 auto 0 0;
  background: var(--main-text);
  transition: all 0.4s;
}
.headerMenu .headerMenuLine:nth-child(3) {
  width: 10px;
}
.headerMenu.active .headerMenuLine {
  position: relative;
  width: 17px;
  background: var(--main-bg);
}
.headerMenu.active .headerMenuLine:nth-of-type(1) {
  top: -2px;
  transform: translateY(5px) rotate(-45deg);
}
.headerMenu.active .headerMenuLine:nth-of-type(2) {
  opacity: 0;
}
.headerMenu.active .headerMenuLine:nth-of-type(3) {
  top: 0;
  width: 17px;
  transform: translateY(-11px) rotate(45deg);
}

.headerMenuInner {
  position: fixed;
  top: 46px;
  left: 0;
  font-size: 14px;
  width: 100%;
  transform: translateX(-100%);
  transition: all 0.3s;
}

.headerMenuInner.active {
  transform: translateX(0);
}

.headerMenuInner hr {
  position: absolute;
  top: 68%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: calc(100% - 80px);
  border: solid 2px var(--main-bg);
  border-radius: 10px;
}

.currentPage {
  opacity: 0.4;
}

.menuText {
  margin: 30px 0;
}

.headerMenuList {
  height: calc(100vh - 46px);
}

.headerMenuList span {
  color: var(--main-bg);
  font-size: 300%;
  font-weight: bold;
}

.snsIcon {
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 80px);
  bottom: 120px;
}

.snsIcon li {
  width: 50px;
  height: 50px;
}

.header svg {
  position: absolute;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  display: inline-block;
  margin: 0 auto;
  width: 30px;
  padding: 10px;
}
</style>
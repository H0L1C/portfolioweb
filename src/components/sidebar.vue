<template>
  <div class="side">
    <ul>
      <li>
        <router-link to="/" class="TopPage">
          <span>Top</span>
        </router-link>
      </li>
      <li>
        <router-link to="/Gallery" class="GalleryPage">
          <span>Gallery</span>
        </router-link>
      </li>
      <li>
        <a href="https://twitter.com/HLC012" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 47">
            <path
              d="M36.6 15.4a10.5 10.5 0 01-2.5.7l-.6.1a5.5 5.5 0 002-2.2 5.7 5.7 0 00.4-.7 10.9 10.9 0 01-3.4 1.3 5.4 5.4 0 00-9.3 3.6 5.2 5.2 0 00.1 1.2 15.3 15.3 0 01-10-4.4l-1-1.1a5.4 5.4 0 001 6.6 6.1 6.1 0 00.6.5 5.4 5.4 0 01-2.4-.6 5.4 5.4 0 003.2 4.9 5.4 5.4 0 001 .4 5.2 5.2 0 01-1.3.2 5.3 5.3 0 01-.9-.1 5.4 5.4 0 004 3.6 5.7 5.7 0 00.8.1 10.8 10.8 0 01-6.6 2.3h-1.3a15.3 15.3 0 008.2 2.4 14.7 14.7 0 0012.1-6l.7-1 .2-.2.5-1 .2-.2.5-1.3a15.6 15.6 0 001-5.6v-.7a11 11 0 002.3-2.1 7.3 7.3 0 00.5-.6z"
              fill="#353535"
            />
          </svg>
          <span class="ring"></span>
        </a>
      </li>
      <li>
        <a href="https://bit.ly/2w5NbhO" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 47">
            <path fill="#353535" d="M35.6 23.5L16 12.2v22.6l19.6-11.3z" />
          </svg>
          <span class="ring1"></span>
        </a>
      </li>
      <li>
        <a href="#mailgo" data-address="contact" data-domain="h0l1c.work">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 47">
            <path
              fill="#353535"
              d="M38.2 25.8l-3.8-4 3.8-3.3v7.3zM12.6 21.8l-3.8 4v-7.3l3.8 3.3zM38.2 29.4V33a1.6 1.6 0 01-1.6 1.6H10.3A1.6 1.6 0 018.9 33v-3.6l5.7-6L21 29a3.9 3.9 0 002.5 1 3.9 3.9 0 002.6-1l6.5-5.6z"
            />
            <path
              d="M38.2 14v1.6l-13.9 12a1.4 1.4 0 01-1.6 0l-14-12V14a1.6 1.6 0 011.7-1.6h26.3a1.6 1.6 0 011.5 1.6z"
              fill="#353535"
            />
          </svg>
          <span class="ring2"></span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style>
.side {
  position: relative;
  width: 60px;
  height: 100vh;
  border-right: 2px solid;
  position: fixed;
  background-color: var(--main-bg);
  z-index: 2;
}

.side ul {
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  bottom: 0;
  list-style: none;
}

.side li {
  position: relative;
}

.side span {
  position: relative;
  color: var(--main-text);
}

.TopPage,
.GalleryPage {
  margin: 15px 20px;
  writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  -webkit-writing-mode: vertical-rl;
  transform: rotateZ(180deg);
  transform: 0.3s;
}

.TopPage::after,
.GalleryPage::after {
  position: absolute;
  top: 0;
  left: -8px;
  content: "";
  width: 3px;
  height: 0;
  background: var(--sub-color);
  transition: 0.3s;
}

.TopPage:hover::after,
.GalleryPage:hover::after {
  height: 100%;
}

.side svg {
  display: block;
  margin: 20px auto;
  width: 45px;
}

.ring,
.ring1,
.ring2 {
  position: absolute !important;
  margin: 0;
  padding: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  left: 5px;
  top: -3px;
  background-color: #60606030;
  opacity: 0;
}

.ring:hover,
.ring1:hover,
.ring2:hover {
  -webkit-animation: hover 1s ease;
  animation: hover 1s ease;
}

@-webkit-keyframes hover {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.8);
  }

  40% {
    opacity: 1;
    -webkit-transform: scale(1.2);
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(1.5);
  }
}

@keyframes hover {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }

  40% {
    opacity: 1;
    transform: scale(1.2);
  }

  100% {
    opacity: 0;
    transform: scale(1.5);
  }
}
</style>


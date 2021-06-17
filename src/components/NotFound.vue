<template>
  <div class="notFoundPage">
    <h1>404 NotFound</h1>
    <div class="nfWrap">
      <router-link to="/" exact>
        <p class="nfBtn">- Back to Top -</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.notFoundPage {
  position: relative;
  width: auto;
  height: 88vh;
}

.notFoundPage h1 {
  position: absolute;
  top: 40%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  animation: errorCodeAnim 4s infinite ease-in-out;
}

.notFoundPage h1::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100px;
  height: 100px;
  border: 2px solid #35353520;
  border-radius: 50%;
  box-sizing: border-box;
  pointer-events: none;
  animation: pulsate 2s linear infinite;
}

.nfWrap {
  position: absolute;
  top: 80%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.nfBtn {
  transition: 0.3s;
  cursor: pointer;
  opacity: 0.7;
}

.nfBtn:hover {
  color: var(--sub-color);
  opacity: 1;
}

@keyframes errorCodeAnim {
  0% {
    transform: translate(-50%, -50%);
  }
  50% {
    transform: translate(-50%, -20%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
}

@keyframes pulsate {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  50% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
<template>
  <div class="about section">
    <hr />
    <h2 id="About">ABOUT</h2>
    <p class="caption"></p>
    <div class="myProfile">
      <div class="icon">
        <img
          src="../assets/images/HLC_IO.png"
          alt="MyIcon"
          class="myImg"
          loading="lazy"
          width="145"
          height="145"
          decoding="“async”"
        />
        <h3>H0L1C</h3>
      </div>
      <div class="profile">
        <p>
          <br />
          1999年生まれ 映像・Webクリエイター / VJ<br /><br />
          映像作品やWeb・XRコンテンツの制作をしています。<br />
          VirtualizeRealizeに所属し、ライブシステムの開発からオペレーションなども行っています。<br />
        </p>
      </div>
    </div>
  </div>
</template>



<style>
.myProfile {
  position: relative;
  display: grid;
  grid-template-columns: minmax(200px, 0.5fr) 1fr;
  height: auto;
  width: 50%;
  margin: 50px auto 0 auto;
}

.icon h3 {
  color: var(--main-text);
  font-size: 200%;
  padding: 0;
  position: absolute;
  width: 300px;
  margin: 0;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
}

.icon {
  position: relative;
  min-width: 200px;
  height: 200px;
}

.myImg {
  position: absolute;
  width: 145px;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 50%;
  border: solid 2px var(--sub-bg);
  box-shadow: 0px 1px 3px 0px #00000026;
}

.profileText {
  font-size: 160% !important;
  padding: 0 10px !important;
  border-left: 6px solid var(--sub-color);
}

.profile p {
  text-align: left;
  padding: 0;
  font-family: "Noto Sans JP", sans-serif;
}
</style>

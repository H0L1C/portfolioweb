<template>
  <div>
    <h2 id="Contact">Contact</h2>
    <div class="contactList">
      <div class="contactItem leftItem">
        <a href="https://twitter.com/HLC012" target="_blank" rel="noopener">
          <h3>TwitterDM</h3>
          <h4>@HLC012</h4>
        </a>
      </div>
      <div class="contactItem rightItem">
        <a href="#mailgo" data-address="contact" data-domain="h0l1c.work">
          <h3>Mail</h3>
          <h4>contact&#64;h0l1c.work</h4>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.contactList {
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

.contactItem {
  position: relative;
  width: calc((100% - 40px) / 2);
  min-width: 300px;
  height: 120px;
  margin: 20px 0;
}

.contactItem h3 {
  position: relative;
  padding: 10px 30px;
  font-size: 160%;
  height: 30px;
  line-height: 30px;
  color: var(--main-text);
  border: solid 2px;
  border-radius: 2px;
  transition: 0.3s;
}

.contactItem h3:hover {
  color: var(--sub-color);
}

.contactItem h4 {
  font-family: Verdana, Tahoma, sans-serif;
  font-size: 140%;
  margin: 0;
  padding: 0 30px;
  height: 70px;
  line-height: 70px;
  top: 50px;
  color: var(--main-text);
}

.leftItem h3 {
  left: 0;
}

.rightItem h3,
.rightItem h4 {
  right: 0;
}
</style>
<template>
  <div>
    <mq-layout :mq="['xl']">
      <WorkMenu></WorkMenu>
    </mq-layout>
    <Work :worksTitle="workTitle"></Work>
    <hr />
    <Events></Events>
    <div class="btnWrap">
      <router-link to="/" exact>
        <p class="backBtn">Back to Top</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import WorkMenu from "./WorkMenu.vue";
import Work from "./Work.vue?version=20210905";
import Events from "./Events.vue";

export default {
  data() {
    return {
      loading: true,
      workTitle: "ALL WORKS",
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 300);
  },
  components: {
    WorkMenu,
    Work,
    Events,
  },
};
</script>


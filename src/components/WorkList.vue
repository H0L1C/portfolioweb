<template>
  <div>
    <mq-layout :mq="['xl']">
      <WorkMenu></WorkMenu>
    </mq-layout>
    <Work :num="6" :worksTitle="workTitle"></Work>
    <hr />
    <Events></Events>
    <div class="btnWrap">
      <router-link to="/" exact>
        <p class="backBtn backTop">Back to Top</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import WorkMenu from "./WorkMenu.vue";
import Work from "./Work.vue";
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


<template>
  <div>
    <mq-layout :mq="['xl']">
      <WorkMenu></WorkMenu>
    </mq-layout>
    <Work :num="6" :worksTitle="workTitle"></Work>
    <hr />
    <Events></Events>
  </div>
</template>

<script>
import WorkMenu from "./WorkMenu.vue";
import Work from "./Work.vue";
import Events from "./Events.vue";

export default {
  data() {
    return {
      workTitle: "ALL WORKS",
    };
  },

  components: {
    WorkMenu,
    Work,
    Events,
  },
};
</script>

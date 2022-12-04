<template>
  <div>
    CardVue

    <div v-if="loading">loading card...</div>
    <div v-else>
      <div>cardId: {{ cardId }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cardId: 0,
      loading: false
    };
  },
  watch: {
    $route: {
    //   this.fetchData();
        handler: 'fetchData',
        immediate: true
    }
  },
/*   created() {
    this.fetchData();
  }, */
  methods: {
    fetchData() {
      this.loading = true;
      setTimeout(() => {
        this.cardId = this.$route.params.cardId;
        this.loading = false;
      }, 500);
    }
  }
};
</script>
<style></style>

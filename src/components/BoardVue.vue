<template>
  <div>
    Board
    <div v-if="loading">loading board...</div>

    <div v-else>
      boardId: {{ boardId }}
      <router-link :to="`/b/${boardId}/c/1`">Card_1</router-link>
      <router-link :to="`/b/${boardId}/c/2`">Card_2</router-link>
    </div>

    <hr />
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      boardId: 0,
      loading: false,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData(){
        // fetchData: 백엔드API를 호출하고, 요청하는 데이터
        this.loading = true;
        setTimeout(()=>{
            this.boardId = this.$route.params.boardId
            this.loading = false
        },500)
    }
  }
};
</script>
<style></style>

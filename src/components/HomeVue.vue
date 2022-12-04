<template>
  <div>
    Home_BoardList?
    <div v-if="loading">Loading...</div>
    <div v-else>Api Result : {{ apiRes }}</div>

    <ul>
      <li>
        <router-link to="/b/1">Board_1</router-link>
      </li>
      <li>
        <router-link to="/b/2">Board_2</router-link>
      </li>
      <li>
        <router-link to="/b/3">Board_3</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      apiRes: "",
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      const req = new XMLHttpRequest();

      req.open("GET", "http://localhost:3000/health");

      req.send();

      req.addEventListener("load", () => {
        this.loading = false;
        this.apiRes = {
          status: req.status,
          statusText: req.statusText,
          response: JSON.parse(req.response),
        };
      });
    },
  },
};
</script>
<style></style>

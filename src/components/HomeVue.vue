<template>
  <!--   <div>
    Home_BoardList?
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="b in boards" :key="b.id">
        {{ b }}
      </div>
    </div> -->
  <!-- <div v-if="error"><pre>Error: {{error}}</pre></div> -->
  <!--     <ul>
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
  </div> -->
  <div>
    <div class="home-title">Personal Boards</div>
    <div class="board-list" ref="boardList">
      <div class="board-item" v-for="b in boards" :key="b.id" :data-bgcolor="b.bgColor" ref="boardItem">
        <router-link :to="`/b/${b.id}`">
          <div class="board-item-title">{{ b.title }}</div>
        </router-link>
      </div>
      <div class="board-item board-item-new">
        <a class="new-board-btn" href="" @click.prevent="addBoard">
          Create new board...
        </a>
      </div>
    </div>
    <AddBoard v-if="isAddBoard" @close="isAddBoard=false" @submit="onAddBoard"/>
  </div>
</template>
<script>
// import axios from 'axios'
import { module } from '../api/apiModule'
import AddBoard from './AddBoard.vue'

export default {
  components: {
    AddBoard
  },
  data() {
    return {
      loading: false,
      boards: [],
      error: '',
      isAddBoard: false,
    }
  },
  created() {
    this.fetchData()
  },
  updated() {
    this.$refs.boardItem.forEach(el => {
      el.style.backgroundColor = el.dataset.bgcolor
    })
  },
  methods: {
    fetchData() {
      this.loading = true
      module.fetch()
        .then(data => {
          this.boards = data.list
        })
        .finally(_ => {
          this.loading = false
        })
    },
    addBoard() {
      this.isAddBoard = true
    },
    onAddBoard(title){
      console.log(title);
      module.create(title)
        .then(() => this.fetchData())
    }
  }
  /*   data() {
      return {
        loading: false,
        boards: []
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.loading = true; */

  /*       axios.get("http://localhost:3000/boards")
          .then(res => {
            this.boards = res.data;
          }) */
  /*         .catch(res => {
    this.$router.replace("/login");
  }) */
  /*       module.fetch()
          .then(data => {
            this.boards = data
          })
          .finally(() => {
            this.loading = false;
          }); */

  /*       const req = new XMLHttpRequest();

  req.open("GET", "http://localhost:3000/health");

  req.send();

  req.addEventListener("load", () => {
    this.loading = false;
    this.apiRes = {
      status: req.status,
      statusText: req.statusText,
      response: JSON.parse(req.response),
    };
  }); */
  // }
  // }
};
</script>
<style>
.home-title {
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
}
.board-list {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}
.board-item {
  width: 23%;
  height: 100px;
  margin: 0 2% 20px 0;
  border-radius: 3px;
}


.board-item {
  width: 23%;
  height: 100px;
  margin: 0 2% 20px 0;
  border-radius: 3px;
}
.board-item a {
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
}
.board-item a:hover,
.board-item a:focus {
  background-color: rgba(0,0,0, .1);
  color: #666;
}
.board-item-title {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
}
.board-item a.new-board-btn {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  height: 100px;
  width: inherit;
  color: #888;
  font-weight: 700;
}
</style>
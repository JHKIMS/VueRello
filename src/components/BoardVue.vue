<template>
    <div>
        boardId: {{boardId}}
        <router-link :to="`/b/${boardId}/c/1`">Card_1</router-link>
        <router-link :to="`/b/${boardId}/c/2`">Card_2</router-link>
        <hr />
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return{
            boardId: 0
        }
    },
    created(){
        this.boardId = this.$route.params.boardId;
    }
}
</script>
<style>
    
</style>
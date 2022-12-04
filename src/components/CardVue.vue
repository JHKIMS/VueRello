<template>
    <div>
        CardVue
        <div>cardId: {{cardId}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            cardId: 0
        }
    },
    watch:{
        '$route'(){
            this.cardId = this.$route.params.cardId;
        }
    },
    created(){ // 카드정보를 갱신하는 부분
        this.cardId = this.$route.params.cardId;
    }
}
</script>
<style>
    
</style>
<template>
    <!-- <transition> -->
        <div class="loading" v-if="isLoading" ></div>
    <!-- </transition> -->
</template>

<script>
export default {
    computed: {
        isLoading () {
            return this.$store.state.isLoading;
        },
    },
    
}
</script>

<style lang="scss" scoped>
.loading {
    display: block;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background: rgba(255,255,255,.7) url('../assets/img/loading.gif') no-repeat center;

    &.show {
        display: block;
    }
}

// .v-leave-active {
//     transition: opacity 1.5s;
// }
</style>


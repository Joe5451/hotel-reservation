<template>
  <div id="app">
    <Loading />
    <router-view/>
  </div>
</template>

<script>
import Loading from './components/Loading';

export default {
  components: {
    Loading,
  }
}
</script>

<style lang="scss">
@import './assets/scss/all.scss';

#app {
  min-width: 1280px;
}

.col-3 {
  width: 25%;
}

.col-9 {
  width: 75%;
}

.leaves-bg {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 400px;
    height: 400px;
    background: url('assets/img/leaves_bg.png') no-repeat 80px -80px;
}

.room-title {
    span {
        background: #F73131;
        color: #fff;
        padding: 6px 12px;
        border-radius: 50px;
        font-size: 12px;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: bold;
    }

    button {
        margin-left: auto;
        background: #419D78;
        color: #fff;
        font-size: 1.5rem;
        padding: 6px 16px;
    }
}

// * {
//   border: 1px solid red !important;
// }
</style>

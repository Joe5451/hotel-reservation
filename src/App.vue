<template>
  <div id="app">
    <router-view/>
  </div>
</template>

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

// * {
//   border: 1px solid red !important;
// }
</style>

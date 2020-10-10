<template>
    <div class="position-relative">
        <div class="home-page pt-md">
            <HomeNavbar />
            <main class="px-lg">
                <div style="width:55%;">
                    <img src="../assets/img/home_logo.png" class="d-block mx-auto mb-xl" width="300px" height="auto" alt="logo">
                    <div class="room-intro px-md">
                        <h3 class="title">客房介紹</h3>
                        <div class="d-flex justify-content-between mb-sm">
                            <img src="../assets/img/room.png" alt="room">
                            <img src="../assets/img/room.png" alt="room">
                            <img src="../assets/img/room.png" alt="room">
                        </div>
                        <div class="d-flex justify-content-between">
                            <img src="../assets/img/room.png" alt="room">
                            <img src="../assets/img/room.png" alt="room">
                            <img src="../assets/img/room.png" alt="room">
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <div class="leaves-bg"></div>
        <Footer />
    </div>
</template>

<script>
import HomeNavbar from '../components/HomeNavbar';
import Footer from '../components/Footer';

export default {
    components: {
        HomeNavbar,
        Footer,
    }
}
</script>

<style lang="scss" scoped>
.home-page {
    height: 800px;
    background: url('../assets/img/home_bg.png') no-repeat;
    background-position: -250px;
    background-size: cover;

    main {
        margin-top: 130px;
    }
    
    .room-intro {
        .title {
            padding: 8px;
            background: #2D3047;
            color: #fff;
            text-align: center;
            margin-bottom: 15px;
        }

        img {
            width: calc((100%/3) - 30px/3);
        }
    }
}

.leaves-bg {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 400px;
    height: 400px;
    background: url('../assets/img/leaves_bg.png') no-repeat 80px -80px;
}
</style>
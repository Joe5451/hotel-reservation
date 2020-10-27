<template>
    <div class="position-relative">
        <div class="home-page pt-md">
            <HomeNavbar />
            <main class="px-lg">
                <div style="width:55%;">
                    <img src="../assets/img/home_logo.png" class="d-block mx-auto mb-xl" width="300px" height="auto" alt="logo">
                    <div class="room-intro px-md">
                        <h3 class="title">客房介紹</h3>
                        <div class="d-flex flex-wrap justify-content-between">
                            <div class="room-img" v-for="room in rooms" :key="room.id">
                                <img :src="room.imageUrl" alt="room">
                                <div class="more">
                                    <h3>{{ room.name }}</h3>
                                    <p>{{ '$' + room.normalDayPrice + '~' + '$' + room.holidayPrice}}</p>
                                    <router-link :to="`/room/${room.id}`">more ➜</router-link>
                                </div>
                            </div>
                            <!-- <img src="../assets/img/room.png" alt="room">
                            <img src="../assets/img/room.png" alt="room">
                            <img src="../assets/img/room.png" alt="room">
                            <img src="../assets/img/room.png" alt="room">
                            <img src="../assets/img/room.png" alt="room">
                            <img src="../assets/img/room.png" alt="room"> -->
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
    },
    computed: {
        rooms () {
            return this.$store.state.rooms;
        }
    },
    methods: {
        getRooms () {
            this.$store.dispatch('getRooms');
        }
    },
    created () {
        this.getRooms();
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
        
        .room-img {
            width: calc((100%/3) - 30px/3);
            height: 124px;
            margin-bottom: 15px;
            position: relative;
            overflow: hidden;

            &:hover {
                .more {
                    bottom: 0;
                }
            }

            .more {
                background: #28614A;
                width: 100%;
                height: 100%;
                position: absolute;
                bottom: 100%;
                left: 0;
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                padding: 15px;
                transition: all 0.7s;

                h3 {
                    color: #fff;
                    font-weight: bold;
                }

                p {
                    color: #7EC8AA;
                }

                a {
                    display: block;
                    width: 100px;
                    padding: 0px 12px;
                    border-radius: 20px;
                    background: #fff;
                    color: #28614A;
                    cursor: pointer;
                }
            }


        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>
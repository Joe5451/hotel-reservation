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
        <div class="ornament">
            <div class="brand"><span>訂</span><span>房</span></div>
            <div class="lantern"><img src="../assets/img/tel.png" alt="tel" width="20ox" height="20px"></div>
            <div class="lantern"><img src="../assets/img/message.png" alt="message" width="20ox" height="20px"></div>
        </div>
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

.ornament {
    position: absolute;
    top: 0;
    left: 50px;
    height: 255px;
    width: 50px;

    .brand, .lantern {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .brand {
        background: #419D78;
        color: #2D3047;
        padding: 15px;
        font-size: 20px;
        font-weight: bold;
        display: flex;
        height: 91px;
        width: 51px;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        border-radius: 10px;
        top: 40px;
        z-index: 1;

        &:before {
            background: #419D78;
            top: -11px;
            left: 50%;
            transform: translateX(-50%);
        }

        &:after {
            height: 40px;
        }
    }

    .lantern {
        background: #2D3047;
        width: 40px;
        height: 40px;
        border-radius: 50%;

        img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 20px;
            height: 20px;
        }

        &:before {
            background: #2D3047;
            top: 0;
            left: 50%;
            transform: translate(-50%, -40%);
        }

        &:after {
            height: 25px;
        }

        &:nth-child(2) {
            bottom: 65px;
        }

        &:nth-child(3) {
            bottom: 0;
        }
        
    }

    .brand, .lantern {
        &:before, &:after {
            content: '';
            display: block;
            position: absolute;
        }

        &:before {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            
        }

        &:after {
            width: 5px;
            background: #2D3047;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 0 0 2.5px 2.5px;
        }
    }
}
</style>
<template>
    <div class="position-relative">
        <Navbar />
        <main class="px-lg py-xl" v-if="room.name">
            <div class="d-flex">
                <div class="room-info w-40">
                    <div class="result success" v-if="result.success">完成訂單</div>
                    <div class="result fail" v-else>訂單失敗</div>
                    <!-- <img src="../assets/img/room2.png" alt="room picture"> -->
                    <img :src="room.imageUrl[0]" width="392px" height="301px" alt="room picture">
                    <div class="room-content">
                        <h3>Single Room</h3>
                        <p>入住日期： {{transformDate(reservation.date[0])}}~{{transformDate(reservation.date[reservation.date.length - 1])}}</p>
                        <p>入住人數： {{reservation.adultNum + reservation.childNum}}人</p>
                    </div>
                    <div class="total-price my-md position-absolute">
                            <span class="mr-md">總價</span>
                            <span>NT {{reservation.totalPrice}}</span>
                    </div>
                </div>
                <div class="reservation-message w-60">
                    <!-- <p class="dear">親愛的Weng女士：</p> -->
                    <p class="dear">親愛的{{reservation.guestInfo.lastName}}{{reservation.guestInfo.gender}}：</p>

                    <div class="order-number" v-if="result.success">訂單編號：1920181017</div>
                    <div class="fail-message" v-else>{{result.data.message}}</div>

                    <!-- <p class="message">您在2019年01月27日 18:26，已成功預約了Single Room此房型，期待您當天的蒞臨。訂房確認函已寄至sry55423@gmail.com，請立即前往查詢訂單。</p> -->
                    <p class="message" v-if="result.success">您在2019年01月27日 18:26，已成功預約了Single Room此房型，期待您當天的蒞臨。訂房確認函已寄至{{reservation.guestInfo.email}}，請立即前往查詢訂單。</p>
                    <p class="message" v-else-if="result.data.message == '您所提供的訂房時間已有訂房'">抱歉，由於{{room.name}}此房型太熱門了，您晚了一步，已被其他房客預約走了，不妨看看我們其他房型喔，相信其他房型也不會讓您失望的，讓您有賓至如歸的感覺。</p>

                    <button v-if="result.data.message == '您所提供的訂房時間已有訂房'">其他客房</button>
                    <button v-else-if="result.success">查看信件</button>
                    <p class="contact">如有任何變更或取消需求，請撥打客服專線0800-520-141</p>
                </div>
            </div>
        </main>
        <div class="leaves-bg"></div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default {
    components: {
        Navbar,
        Footer,
    },
    computed: {
        result () {
            return this.$store.state.reservationResult;
        },
        checkDate () {
            return this.$store.state.checkDate;
        },
        reservation () {
            return this.$store.state.reservationData;
        },
        room () {
            return this.$store.state.curRoom;
        }
    },
    data () {
        return {
            id: '',
        }
    },
    methods: {
        transformDate (time) { // yyyy-mm-dd => yyyy年mm月dd日
            if (time) {
                let array = time.split('-');
                return array[0] + '年' + array[1] + '月' + array[2] + '日';
            } else return '';
        },
        getCurRoom () {
            this.$store.dispatch('getCurRoom', this.id);
        },
    },
    created () {
        this.id = this.$route.params.id;
        this.getCurRoom();
    }
}
</script>

<style lang="scss" scoped>
.room-info {
    padding: 24px 40px 100px;
    background: #2D3047;
    position: relative;

    .result {
        position: absolute;
        top: 40px;
        left: 0;
        color: #fff;
        font-size: 24px;
        padding: 12px 32px;

        &.success {
            background: #7EC8AA;
        }

        &.fail {
            background: #F73131;
        }
    }

    img {
        object-fit: cover;
        margin-bottom: 16px;
    }

    .room-content {
        h3, p {
            color: #fff;
            margin-bottom: 16px;
        }

        h3 {
            font-size: 24px;
        }
    }

    .total-price {
        bottom: 0;
        right: 40px;
        padding-left: 50px;
        color: #fff;
        border-bottom: 8px solid #959CC4;
        span {
            font-size: 40px;
        }
    }
}

.reservation-message {
    border: 1px solid rgba(0,0,0,.5);
    border-left: 0;
    padding: 35px;
    position: relative;

    p {
        color: #070707;
        letter-spacing: 2px;

        &.dear {
            font-size: 24px;
            font-weight: bold;
            margin-top: 70px;
        }

        &.message {
            line-height: 3;
            text-indent: 50px;
            font-weight: bold;
        }

        &.contact {
            color: #C9C9C9;
            position: absolute;
            right: 24px;
            bottom: 24px;
        }
    }

    .order-number, .fail-message {
        margin: 50px auto;
        color: #F73131;
        font-size: 40px;
        text-align: center;
    }

    button {
        background: #419D78;
        color: #fff;
        font-size: 1.5rem;
        padding: 6px 16px;
        position: absolute;
        right: 24px;
        bottom: 55px;
        z-index: 1;
    }
}
</style>
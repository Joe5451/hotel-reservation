<template>
    <div class="position-relative">
        <Navbar />
        <main class="px-lg py-xl">
            <div class="d-flex">
                <div class="room-info w-40">
                    <div class="result success">完成訂單</div>
                    <img src="../assets/img/room2.png" alt="room picture">
                    <div class="room-content">
                        <h3>Single Room</h3>
                        <p>入住日期： 2019年2月12日~2019年2月14日</p>
                        <p>入住人數： 1人</p>
                    </div>
                    <div class="total-price my-md position-absolute">
                            <span class="mr-md">總價</span>
                            <span>NT 3200</span>
                    </div>
                </div>
                <div class="reservation-message w-60">
                    <p>親愛的Weng女士：</p>
                    <div class="order-number">訂單編號：1920181017</div>
                    <p>　　您在2019年01月27日 18:26，已成功預約了Single Room此房型，期待您當天的蒞臨。訂房確認函已寄至sry55423@gmail.com，請立即前往查詢訂單。</p>
                    <button>查看信件</button>
                    <p>如有任何變更或取消需求，請撥打客服專線0800-520-141</p>
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
        width: 100%;
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

        &:nth-child(1) {
            font-size: 24px;
            font-weight: bold;
            margin-top: 70px;
        }

        &:nth-child(3) {
            line-height: 3;
            text-indent: 50px;
            font-weight: bold;
        }

        &:last-child {
            color: #C9C9C9;
            position: absolute;
            right: 24px;
            bottom: 24px;
        }
    }

    .order-number {
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
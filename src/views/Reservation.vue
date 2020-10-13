<template>
    <div class="position-relative">
        <Navbar />
        <main class="px-lg py-xl">
            <h2 class="reservation-title mb-md">訂單內容</h2>
            <div class="d-flex mb-md">
                <div>
                    <img src="../assets/img/room2.png" alt="room picture" width="450px" style="object-fit: cover; height:100%">
                </div>
                <div class="d-flex flex-column">
                    <div class="room-title d-flex align-items-center">
                        <span class="mr-sm">HOT</span>
                        <h3>房間名稱：Single Room</h3>
                        <button>取消</button>
                    </div>
                    <div class="room-content position-relative">
                        <p>入住日期： 2019年2月12日~2019年2月14日</p>
                        <p>入住人數： 1人</p>
                        <p>不含早餐</p>
                        <p>　　Single Room is only reserved for one guest. There is a bedroom with a single size bed and a private bathroom. Everything you need prepared for you: sheets and blankets, towels, soap and shampoo, hairdryer are provided. In the room there is AC and of course WiFi.</p>
                        <div class="total-price my-md position-absolute">
                            <span class="mr-md">總價</span>
                            <span>NT 3200</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="remind-message d-flex align-items-center mb-lg">
                <img src="../assets/img/star.png" alt="star" class="mr-sm">
                <p>確保預訂資格無需任何費用。您將於入住期間付款。</p>
            </div>

            <form class="reservation-form">
                <h2 class="form-title">訂房資料</h2>

                <div class="row">
                    <div class="form-group">
                        <label for="">入住日期</label>
                        <div class='date-select checkin'>2020年10月11日</div>
                    </div>
                    <div class="form-group">
                        <label for="">退房日期</label>
                        <div class='date-select checkout'>2020年10月11日</div>
                    </div>
                    <span class="welcome">歡迎您的蒞臨，誠摯為您服務2晚。</span>
                </div>
                
                <div class="row">
                    <div class="form-group">
                        <label for="">姓氏(英文)</label>
                        <input type="text" placeholder="例：Weng">
                    </div>
                    <div class="form-group">
                        <label for="">姓名(英文)</label>
                        <input type="text" placeholder="例：Yuri-Han">
                    </div>
                    <div class="form-group">
                        <label for="">稱謂</label>
                        <select name="gender">
                            <option selected disabled>請選擇</option>
                            <option value="man">男士</option>
                            <option value="woman">女士</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group w-50">
                        <label for="">聯絡電話</label>
                        <input type="text" placeholder="例：0932-123-123">
                    </div>
                </div>

                <div class="row">
                    <div class="form-group w-100">
                        <label for="">電子信箱</label>
                        <input type="text" placeholder="小心不要打錯了，訂房確認函會寄到電子信箱喔">
                    </div>
                </div>

                <div class="row">
                    <div class="form-group w-100">
                        <label for="">確認信箱</label>
                        <input type="text" placeholder="再仔細確認一次吧">
                    </div>
                </div>

                <div class="extra-service">
                    <h3 class="title">額外加價服務</h3>
                    <label>早餐  $320/1人
                        <input type="checkbox" name="" id="">
                        <span class="checkmark"></span>
                    </label>
                    <label>租車旅遊  $2500/1日
                        <input type="checkbox" name="" id="">
                        <span class="checkmark"></span>
                    </label>
                </div>

                <div class="row">
                    <button class="submit-btn" @click.prevent="pushToResult">確認訂房</button>
                </div>
            </form>
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
    methods: {
        pushToResult () {
            this.$router.push('/reservation/joe123/result');
        }
    }
}
</script>

<style lang="scss" scoped>
.reservation-title {
    font-size: 2rem;
    color: #2D3047;
    position: relative;
    padding-left: 24px;

    &:before {
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 10px;
        background: #2D3047;
        position: absolute;
        top: 50%;
        left: 8px;
        transform: translate(0,-50%);
    }
}

.room-title {
    background: #2D3047;
    padding: 8px 24px;
    color: #fff;
}

.room-content {
    padding: 30px 24px;
    border: 1px solid rgba(0,0,0,.5);
    border-top: 0;

    p {
        margin-bottom: 24px;
        color: #2D3047;

        &:nth-child(3) {
            color: #F73131;
        }

        &:nth-child(4) {
            margin-bottom: 0;
            color: #8F8F8F;
            line-height: 3;
            font-size: 12px;
            text-indent: 30px;
        }
    }

    .total-price {
        top: 44px;
        right: 24px;
        padding-left: 50px;
        border-bottom: 8px solid #959CC4;
        span {
            font-size: 40px;
        }
    }
}

.remind-message {
    background: #419D78;
    padding: 12px 24px;

    

    p {
        color: #fff;
    }
}

.reservation-form {
    margin-top: 120px;
    margin-bottom: 70px;
    padding: 70px 100px 30px;
    border: 1px solid rgba(0,0,0,.5);
    position: relative;

    .form-title {
        background: #2D3047;
        color: #fff;
        padding: 16px 60px;
        font-size: 24px;
        position: absolute;
        bottom: 100%;
        left: 0;
        border-radius: 10px 10px 0 0;
    }

    .row {
        display: flex;
        align-items: flex-end;
        margin-bottom: 35px;
    
        .form-group {
            display: flex;
            flex-direction: column;
            margin-right: 50px;

            &.w-50 {
                width: 50%;
            }

            &.w-100 {
                width: 100%;
            }

            label {
                margin-bottom: 16px;
                color: #2D3047;
                font-weight: bold;
            }
    
            input, .date-select, select {
                border: 1px solid rgba(0,0,0,.5);
                padding: 12px 16px;
                font-size: 16px;
                outline: none;

                &::placeholder {
                    color: #959CC4;
                }
            }

            .date-select {
                padding-left: 60px;
                padding-right: 60px;
                position: relative;

                &.checkin:after {
                    content: '~';
                    display: block;
                    padding: 8px;
                    position: absolute;
                    right: -40px;
                    bottom: 0;
                }
            }


        }

        span {
            padding: 12px 16px;

            &.welcome {
                color: #419D78;
            }
        }

        .submit-btn {
            margin-left: auto;
            margin-right: -30px;
            background: #419D78;
            color: #fff;
            font-size: 1.5rem;
            padding: 6px 16px;
            z-index: 1;
        }
    }

    .extra-service {
        margin: 0 15px 70px -15px;
        color: #419D78;

        .title {
            font-weight: bold;
            border-bottom: 3px solid #419D78;
            padding-bottom: 8px;
            padding-left: 8px;
            margin-bottom: 35px;
        }

        label {
            position: relative;
            display: block;
            margin-bottom: 24px;
            padding-left: 50px;
            cursor: pointer;

            input {
                display: none;
            }

            input:checked ~ .checkmark:after {
                display: block;
            }

            .checkmark {
                display: block;
                background: #fff;
                border: 1px solid rgba(0,0,0,.5);
                width: 17px;
                height: 17px;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 5px;
                transform: translateY(-50%);
            }

            .checkmark:after {
                content: '';
                display: none;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-53%,-53%);
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: #419D78;
            }
            
        }
    }
}

</style>
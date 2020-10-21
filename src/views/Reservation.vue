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
                        <!-- <h3>房間名稱：Single Room</h3> -->
                        <h3>房間名稱：{{ roomInfo.name }}</h3>
                        <button>取消</button>
                    </div>
                    <div class="room-content position-relative">
                        <p>入住日期： 2019年2月12日~2019年2月14日</p>
                        <!-- <p>入住人數： 1人</p> -->
                        <p>入住人數： {{ curReservation.adult + curReservation.child }}人</p>
                        <p>不含早餐</p>
                        <!-- <p>Single Room is only reserved for one guest. There is a bedroom with a single size bed and a private bathroom. Everything you need prepared for you: sheets and blankets, towels, soap and shampoo, hairdryer are provided. In the room there is AC and of course WiFi.</p> -->
                        <p>{{ roomInfo.description }}</p>
                        <div class="total-price my-md position-absolute">
                            <span class="mr-md">總價</span>
                            <!-- <span>NT 3200</span> -->
                            <span>NT {{ total_price }}</span>
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
                        <vue-datepicker-local v-model="checkinTime" popupClass="checkin-datepicker" format="YYYY 年 MM 月 DD 日" inputClass="datepicker-input" :disabled-date="checkin_disabledDate" :local="local"></vue-datepicker-local>
                        <!-- <div class='date-select checkin'>2020年10月11日</div> -->
                    </div>
                    <div class="form-group">
                        <label for="">退房日期</label>
                        <vue-datepicker-local v-model="checkoutTime" popupClass="checkout-datepicker" format="YYYY 年 MM 月 DD 日" inputClass="datepicker-input" :disabled-date="checkout_disabledDate" :local="local"></vue-datepicker-local>
                        <!-- <div class='date-select checkout'>2020年10月11日</div> -->
                    </div>
                    <span class="welcome">歡迎您的蒞臨，誠摯為您服務2晚。</span>
                </div>
                
                <div class="row">
                    <div class="form-group">
                        <label for="">姓氏(英文)</label>
                        <input type="text" v-model="form.lastName" placeholder="例：Weng">
                    </div>
                    <div class="form-group">
                        <label for="">姓名(英文)</label>
                        <input type="text" v-model="form.firstName" placeholder="例：Yuri-Han">
                    </div>
                    <div class="form-group">
                        <label for="">稱謂</label>
                        <select name="gender" v-model="form.gender">
                            <option selected disabled value="">請選擇</option>
                            <option value="男士">男士</option>
                            <option value="女士">女士</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group w-50">
                        <label for="">聯絡電話</label>
                        <input type="text" v-model="form.tel" placeholder="例：0932-123-123">
                    </div>
                </div>

                <div class="row">
                    <div class="form-group w-100">
                        <label for="">電子信箱</label>
                        <input type="text" v-model="form.email" placeholder="小心不要打錯了，訂房確認函會寄到電子信箱喔">
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
                    <button class="submit-btn" @click.prevent="test">確認訂房</button>
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
import VueDatepickerLocal from 'vue-datepicker-local';

export default {
    components: {
        Navbar,
        Footer,
        VueDatepickerLocal,
    },
    computed: {
        roomInfo () {
            return this.$store.state.currentRoomInfo;
        },
        curReservation () {
            return this.$store.state.currentReservation;
        },
        total_price () {
            if (this.checkinTime >= this.checkoutTime) return 0;
            
            let total = 0;
            let checkin = new Date(this.checkinTime);
            let checkout = new Date(this.checkoutTime);
            while (checkin < checkout) {
                if ((checkin.getDay() != 0) && (checkin.getDay() != 5) && (checkin.getDay() != 6)) {
                    total += this.roomInfo.normalDayPrice;
                } else {
                    total += this.roomInfo.holidayPrice;
                }

                checkin.setDate(checkin.getDate()+1);
            }

            return total;
        },
        bookingDate () {
            if (this.checkinTime >= this.checkoutTime) return [];
            let date = [];
            let checkin = new Date(this.checkinTime);
            let checkout = new Date(this.checkoutTime);

            while (checkin < checkout) {
                date.push(this.transformDate(checkin));

                checkin.setDate(checkin.getDate() + 1);
            }

            // date.push(this.transformDate(checkout));
            return date;
        },
    },
    data () {
        return {
            id: '',
            checkinTime: '',
            checkoutTime: '',
            local: {
                dow: 0, // Sunday is the first day of the week
                hourTip: 'Select Hour', // tip of select hour
                minuteTip: 'Select Minute', // tip of select minute
                secondTip: 'Select Second', // tip of select second
                yearSuffix: ' 年', // suffix of head year
                monthsHead: '01 月_02 月_03 月_04 月_05 月_06 月_07 月_08 月_09 月_10 月_11 月_12 月'.split('_'), // months of head
                months: '01 月_02 月_03 月_04 月_05 月_06 月_07 月_08 月_09 月_10 月_11 月_12 月'.split('_'), // months of panel
                weeks:  '日_一_二_三_四_五_六'.split('_'), // weeks
                cancelTip: 'cancel',
                submitTip: 'confirm'
            },
            form: {
                lastName: 'Weng',
                firstName: 'Xiao-Ming',
                gender: '男士',
                tel: '0912345678',
                email: 'xiaoming123@email.com',
            }
        }
    },
    methods: {
        pushToResult () {
            this.$router.push('/reservation/joe123/result');
        },
        getCurrentBooking () {
            const currentBooking = this.$store.state.currentBooking;
            this.checkinTime = currentBooking[0];
            this.checkoutTime = currentBooking[currentBooking.length - 1];

            console.log(this.$data);
        },
        checkin_disabledDate(time) {            
            const checkin = this.checkinTime;
            const checkin_year = checkin.getFullYear();
            const checkin_month = checkin.getMonth();
            const checkin_date = checkin.getDate();
            const checkin_time = new Date(checkin_year, checkin_month, checkin_date);

            return time < checkin_time;
        },
        checkout_disabledDate(time) {
            const checkin = this.checkinTime;
            const checkin_year = checkin.getFullYear();
            const checkin_month = checkin.getMonth();
            const checkin_date = checkin.getDate();
            const checkin_time = new Date(checkin_year, checkin_month, checkin_date + 1);
            
            return  time < checkin_time;
        },
        test () {
            if (this.checkinTime >= this.checkoutTime) {
                alert('入住日期不可等同或大於退房日期!');
                return;
            }

            const reservation_data = {
                roomId: this.id,
                name: this.form.lastName + "-" + this.form.firstName,
                tel: this.form.tel,
                date: [...this.bookingDate],
            }

            console.log(reservation_data);

            this.$store.dispatch('roomBooking', reservation_data);
        },
        // test () {
        //     let date = [];
        //     let checkin = new Date(this.checkinTime);
        //     let checkout = new Date(this.checkoutTime);

        //     while (checkin < checkout) {
        //         date.push(this.transformDate(checkin));

        //         checkin.setDate(checkin.getDate() + 1);
        //     }

        //     date.push(this.transformDate(checkout));
        //     console.log(date);
            
        //     console.log(this.form);
        // },
        transformDate (time) {
            let year = time.getFullYear();
            let month = time.getMonth() + 1; 
            let date = time.getDate();

            if (month < 10) month = '0' + month;
            if (date < 10) date = '0' + date;


            return `${year}-${month}-${date}`;
        }
    },
    created () {
        this.id = this.$route.params.id;
        this.getCurrentBooking();
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
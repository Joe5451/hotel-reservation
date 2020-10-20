<template>
    <div class="position-relative">
        <Navbar />
        <main class="px-lg mt-lg pb-xl">
            <div class="room-title d-flex align-items-center mb-md">
                <span class="mr-sm">HOT</span>
                <!-- <h3>房間名稱：Single Room</h3> -->
                <h3>房間名稱：{{roomInfo.name}}</h3>
                <button class="submit-btn" @click="setBookingDate">預定</button>
            </div>

            <div class="room-imgs-container d-flex mb-md">
                <div class="pr-xs">
                    <img src="../assets/img/room2.png" alt="room picture">
                </div>
                <div class="d-flex flex-column pl-xs">
                    <img src="../assets/img/room2.png" alt="room picture" class="mb-xs">
                    <img src="../assets/img/room2.png" alt="room picture" class="mt-xs">
                </div>
            </div>

            <div class="reservation-select mb-lg">
                <div class="select-bar d-flex justify-content-between mb-sm">
                    <div class="check-date">
                        <div class="checkin">
                            <span>入住日期</span>
                            <vue-datepicker-local v-model="checkinTime" format="YYYY 年 MM 月 DD 日" inputClass="datepicker-input" disabled></vue-datepicker-local>
                        </div>
                        <div class="checkout">
                            <span>退房日期</span>
                            <vue-datepicker-local v-model="checkoutTime" format="YYYY 年 MM 月 DD 日" inputClass="datepicker-input" disabled></vue-datepicker-local>
                        </div>
                    </div>
                    <div class="room-amount">
                        <span>客房</span>
                        <select v-model="room_amount" name="" id="">
                            <option v-for="n in 10" :value="n" :key="n">{{n}}間</option>
                        </select>
                        <!-- <div>1間</div> -->
                    </div>
                    <div class="adult-amount">
                        <span>成人</span>
                        <select v-model="adult_amount" name="" id="">
                            <option v-for="n in 11" :value="n-1" :key="n-1">{{n-1}}人</option>
                        </select>
                        <!-- <div>1人</div> -->
                    </div>
                    <div class="child-amount">
                        <span>小孩</span>
                        <select v-model="child_amount" name="" id="">
                            <option v-for="n in 11" :value="n-1" :key="n-1">{{n-1}}人</option>
                        </select>
                        <!-- <div>0人</div> -->
                    </div>
                </div>
                <div>
                    <vue-datepicker-local v-model="checkinTime" popupClass="checkin-datepicker" type="inline" :disabled-date="checkin_disabledDate" :local="local"></vue-datepicker-local>
                    <template >
                    <vue-datepicker-local v-model="checkoutTime" popupClass="checkout-datepicker" type="inline" :disabled-date="checkout_disabledDate" :local="local"></vue-datepicker-local>
                    </template>
                    <div class="details">
                        <div class="total-price my-md">
                            <span class="mr-md">總價</span>
                            <!-- <span>NT 3200</span> -->
                            <span>NT {{total_price}}</span>
                        </div>
                        <ul class="amenities">
                            <!-- <li>- wifi：有</li>
                            <li>- 漂亮的視野：無</li>
                            <li>- 早餐：有</li>
                            <li>- 禁止吸煙：有</li>
                            <li>- 電話：有</li>
                            <li>- 適合兒童：無</li>
                            <li>- 空調：有</li>
                            <li>- 寵物攜帶：有</li>
                            <li>- 冰箱：有</li>
                            <li>- Mini Bar：無</li>
                            <li>- 沙發：無</li>
                            <li>- Room Service：無</li> -->

                            <li>- wifi：<span v-if="roomInfo.amenities['Wi-Fi']">有</span><span v-else>無</span></li>
                            <li>- 漂亮的視野：<span v-if="roomInfo.amenities['Great-View']">有</span><span v-else>無</span></li>
                            <li>- 早餐：<span v-if="roomInfo.amenities['Breakfast']">有</span><span v-else>無</span></li>
                            <li>- 禁止吸煙：<span v-if="!roomInfo.amenities['Smoke-Free']">有</span><span v-else>無</span></li>
                            <li>- 電視：<span v-if="roomInfo.amenities['Television']">有</span><span v-else>無</span></li>
                            <li>- 適合兒童：<span v-if="roomInfo.amenities['Child-Friendly']">有</span><span v-else>無</span></li>
                            <li>- 空調：<span v-if="roomInfo.amenities['Air-Conditioner']">有</span><span v-else>無</span></li>
                            <li>- 寵物攜帶：<span v-if="roomInfo.amenities['Pet-Friendly']">有</span><span v-else>無</span></li>
                            <li>- 冰箱：<span v-if="roomInfo.amenities['Refrigerator']">有</span><span v-else>無</span></li>
                            <li>- Mini Bar：<span v-if="roomInfo.amenities['Mini-Bar']">有</span><span v-else>無</span></li>
                            <li>- 沙發：<span v-if="roomInfo.amenities['Sofa']">有</span><span v-else>無</span></li>
                            <li>- Room Service：<span v-if="roomInfo.amenities['Room-Service']">有</span><span v-else>無</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="d-flex mb-xl">
                <div class="col-9 pr-lg d-flex flex-column justify-content-between">
                    <!-- <div class="description">Single Room is only reserved for one guest. There is a bedroom with a single size bed and a private bathroom. Everything you need prepared for you: sheets and blankets, towels, soap and shampoo, hairdryer are provided. In the room there is AC and of course WiFi.</div> -->
                    <div class="description">{{roomInfo.description}}</div>
                    <div class="check-time">
                        <div class="d-flex mb-lg">
                            <span class="title mr-md">checkIn 時間</span>
                            <div class="check-time-bar">
                                <div class="progress-bar checkin">
                                    <!-- <span>15:00</span> -->
                                    <!-- <span>21:00</span> -->
                                    <span>{{roomInfo.checkInAndOut.checkInEarly}}</span>
                                    <span>{{roomInfo.checkInAndOut.checkInLate}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex">
                            <span class="title mr-md">checkOut 時間</span>
                            <div class="check-time-bar">
                                <div class="progress-bar checkout">
                                    <!-- <span>10:00</span> -->
                                    <span>{{roomInfo.checkInAndOut.checkOut}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3 pl-lg">
                    <div class="descriptionShort">
                        <ul>
                            <!-- <li>床型：單人床</li>
                            <li>房客人數限制： 1~1 人</li>
                            <li>衛浴數量： 1 間</li>
                            <li>房間大小： 18 平方公尺</li>
                            <li>假日(五~日)價格：1500</li>
                            <li>平日(一~四)價格：1380</li> -->

                            <li>床型：{{roomInfo.descriptionShort.Bed[0]}}</li>
                            <li>房客人數限制： {{roomInfo.descriptionShort.GuestMin}}~{{roomInfo.descriptionShort.GuestMax}} 人</li>
                            <li>衛浴數量： {{roomInfo.descriptionShort['Private-Bath']}} 間</li>
                            <li>房間大小： {{roomInfo.descriptionShort.Footage}} 平方公尺</li>
                            <li>假日(五~日)價格：{{roomInfo.normalDayPrice}}</li>
                            <li>平日(一~四)價格：{{roomInfo.holidayPrice}}</li>
                        </ul>
                    </div>
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
        }
    },
    data () {
        return {
            id: '',
            checkinTime: new Date(),
            checkoutTime: new Date(),
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
            room_amount: 1,
            adult_amount: 0,
            child_amount: 0,
        }
    },
    methods: {
        pushToReservation () {
            this.$router.push('/reservation/joe123');
        },
        checkin_disabledDate(time) {            
            const now = new Date();
            const now_year = now.getFullYear();
            const now_month = now.getMonth();
            const now_date = now.getDate();
            const now_time = new Date(now_year, now_month, now_date);

            return time < now_time;
        },
        checkout_disabledDate(time) {
            const checkin = this.checkinTime;
            const checkin_year = checkin.getFullYear();
            const checkin_month = checkin.getMonth();
            const checkin_date = checkin.getDate();
            const checkin_time = new Date(checkin_year, checkin_month, checkin_date + 1);
            
            return  time < checkin_time;
        },
        // showTime() {
        //     console.log('checkin: ', this.checkinTime);
        //     console.log('checkout:', this.checkoutTime);
        // },
        getRoomInfo (id) {
            // const id = this.$route.params.id;
            this.$store.dispatch('getSingleRoom', id);
        },
        setBookingDate () {
            const GuestMax = this.roomInfo.descriptionShort.GuestMax;
            const bookingDate =  [
                    this.checkinTime,
                    this.checkoutTime
            ];
            const reservation_info = {
                room: this.room_amount,
                adult: this.adult_amount,
                child: this.child_amount,
                max: this.room_amount * GuestMax,
                total: this.total_price,
                success: function() {
                    if (this.max < this.adult + this.child || this.adult + this.child <= 0) return false;
                    else return true;
                },
            };
            let checkin = new Date(this.checkinTime);
            let checkout = new Date(this.checkoutTime);

            //  && reservation_amount.success()

            if (checkin.setDate(checkin.getDate()+1) <= checkout) {
                if (reservation_info.success()) {
                    this.$store.commit('setCurrentBooking', bookingDate);
                    this.$router.push(`/reservation/${this.id}`);
                } else {
                    alert('入住人數大於或小於房間限制');
                }
            } else {
                console.log('失敗');
                console.log(checkin.getMilliseconds(), checkout.getMilliseconds());
                alert('請確認正確訂房退房時間!');
            }

        },
    },
    created () {
        this.id = this.$route.params.id;
        this.getRoomInfo(this.id);
        this.checkoutTime.setDate(this.checkinTime.getDate()+1);
    }
}
</script>

<style lang="scss" scoped>
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

.room-imgs-container {
    height: 570px;
    
    &>div:nth-child(1) {
        width: 60%;
    }

    &>div:nth-child(2) {
        width: 40%;

        img {
            height: calc(50% - 10px);
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border: 1px solid rgba(0, 0, 0, 0.5);
    }
}

.room-amount, .adult-amount, .child-amount {
    display: flex;
    align-items: center;
    position: relative;

    span {
        padding: 4px 16px;
        margin-right: 8px;
    }

    div, select {
        padding: 4px 16px;
        border: 1px solid rgba(0,0,0,.3);
        height: 34px;
        position: relative;
        cursor: pointer;
    }

    // &:before {
    //     position: absolute;
    //     z-index: 1;
    //     content: "";
    //     top: 10px;
    //     right: 2px;
    //     background: #fff;
    //     width: 20px;
    //     height: 20px;
    //     display: block;
    // }

    // &:after {
    //     position: absolute;
    //     z-index: 2;
    //     display: block;
    //     content: "";
    //     top: 14px;
    //     right: 6px;
    //     width: 0;
    //     height: 0;
    //     border: 9px solid transparent;
    //     border-width: 9px 4px;
    //     border-color: #2D3047 transparent transparent transparent;
    // }
}

.check-date {
    display: flex;
}

.check-date>div {
    span {
        border-bottom: 3px solid #419D78;
        margin-right: 12px;
        padding: 4px 16px;
    }

    &.checkout {
        margin-left: 70px;
        span {
            border-color: #2D3047;
        }
    }
}

.reservation-select {
    &>div:nth-child(2) {
        display: flex;
        .date {
            width: 265px;
            height: 265px;
            background: #419D78;

            &.checkout {
                background: #2D3047;
                margin-left: 70px;
            }
        }

        .details {
            margin-left: auto;
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            .total-price {
                flex-grow: 0;
                padding-left: 50px;
                border-bottom: 8px solid #959CC4;
                span {
                    font-size: 40px;
                }
            }

            .amenities {
                width: 360px;
                height: 100%;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                padding-left: 45px;
                border-left: 3px solid #000;

                li {
                    width: 50%;
                    color: #2D3047;

                    &:nth-child(2n) {
                        color: #000;
                    }
                }
            }
        }
    }
}

.check-time {
    .title {
        width: 120px;
    }

    .check-time-bar {
        background: #D6D6D6;
        height: 16px;
        border-radius: 10px;
        flex-grow: 1;

        .progress-bar {
            height: 16px;
            position: relative;

            span {
                position: absolute;
                top: -30px;
                z-index: 1;
                right: 0;
                font-size: 12px;
                background: #fff;
                border: 1px solid #000;
                padding: 1px 4px;
                transform: translateX(50%);

                &:after {
                    content: '';
                    position: absolute;
                    z-index: -1;
                    bottom: 0;
                    left: 50%;
                    transform: translate(-50%, 50%) rotate(45deg);
                    display: block;
                    width: 8px;
                    height: 8px;
                    background: #fff;
                    border: 1px solid #000;
                    border-color: transparent #000 #000 transparent;
                }
            }

            &.checkin {
                background: #419D78;
                width: 25%;
                margin-left: calc(15/24*100%);

                span:nth-child(1) {
                    right: auto;
                    left: 0;
                    transform: translateX(-50%);
                }
            }

            &.checkout {
                background: #959CC4;
                border-radius: 20px 0 0 20px;
                width: calc(10/24*100%);
            }
        }
    }
}

.description {
    letter-spacing: 1px;
    text-indent: 50px;
    line-height: 2;
    color: #8F8F8F;
}

.descriptionShort {
    background: #2D3047;
    color: #fff;
    padding: 40px 25px;

    ul {
        list-style: square inside;

        li:not(:last-child) {
            margin-bottom: 20px;
        }
    }
}
</style>
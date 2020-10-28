<template>
    <nav class="navbar">
        <ul class="d-flex justify-content-end py-xs px-lg">
            <li>
                <router-link to="/" class="d-flex align-items-center">
                    <img src="../assets/img/logo.png" alt="logo" width="50px" height="auto" class="mr-xs">
                    綠柳宿旅
                </router-link>
            </li>
            <li>
                <img src="../assets/img/light_link1.png" width="48px" height="48px" alt="link-icon">
                <a>關於我們</a>
            </li>
            <li>
                <img src="../assets/img/light_link2.png" width="48px" height="48px" alt="link-icon">
                <router-link to="/" class="room-intro">客房介紹</router-link>
            </li>
            <li>
                <img src="../assets/img/light_link3.png" width="48px" height="48px" alt="link-icon">
                <a>住宿服務</a>
            </li>
            <li>
                <img src="../assets/img/light_link4.png" width="48px" height="48px" alt="link-icon">
                <a>交通指引</a>
            </li>
            <li>
                <img src="../assets/img/light_link5.png" width="48px" height="48px" alt="link-icon">
                <a>最新消息</a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.navbar {
    background: #2D3047;
    ul {

        li {
            display: flex;
            align-items: center;

            &:not(:last-child) {
                margin-right: 4rem;
            }

            &:first-child {
                margin-right: auto;
            }
            
            &:not(:first-child) {
                &>img {
                    width: 1.5rem;
                    height: 1.5rem;
                    margin-right: 0.5rem;
                }

                a:not(.room-intro) {
                    position: relative;

                    &:before, &:after {
                        display: none;
                        position: absolute;
                        top: 100%;
                    }

                    &:before {
                        content: '';                    
                        left: 0;
                        transform: translate(0, 5px);
                        border-width: 0 10px 15px;
                        border-style: solid;
                        border-color: transparent transparent rgba(149, 156, 196, 0.5);
                    }
                    
                    &:after {
                        content: '暫未開放';
                        left: 50%;
                        transform: translate(-50%, 20px);
                        background: rgba(149, 156, 196, 0.5);
                        border-radius: 5px;
                        color: #2D3047;
                        width: 100px;
                        padding: 10px 20px;
                        text-align: center;
                    }
                }
    
                a:hover {
                    color: #419D78;

                    &:before, &:after {
                        display: block;
                    }
                }
            }

            a {
                color: #959CC4;
                font-weight: bold;
                cursor: pointer;
            }
        }
    }
}
</style>
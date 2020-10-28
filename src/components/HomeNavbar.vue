<template>
    <nav class="home-navbar">
        <ul class="d-flex justify-content-center">
            <li>
                <img src="../assets/img/dark_link1.png" width="48px" height="48px" alt="link-icon">
                <a>關於我們</a>
            </li>
            <li>
                <img src="../assets/img/dark_link2.png" width="48px" height="48px" alt="link-icon">
                <router-link to="/" class="room-intro">客房介紹</router-link>
            </li>
            <li>
                <img src="../assets/img/dark_link3.png" width="48px" height="48px" alt="link-icon">
                <a>住宿服務</a>
            </li>
            <li>
                <img src="../assets/img/dark_link4.png" width="48px" height="48px" alt="link-icon">
                <a>交通指引</a>
            </li>
            <li>
                <img src="../assets/img/dark_link5.png" width="48px" height="48px" alt="link-icon">
                <a>最新消息</a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.home-navbar {
    ul {
        li {
            display: flex;
            align-items: center;
            &:not(:last-child) {
                margin-right: 4rem;
            }
            
            img {
                width: 2rem;
                height: 2rem;
                margin-right: 0.5rem;
            }
            a {
                color: #1C1F2D;
                font-weight: bold;
                position: relative;
                cursor: pointer;

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

                &.room-intro:after {
                    content: '已在該頁面';
                }

                &:hover {
                    color: #419D78;

                    &:before, &:after {
                        display: block;
                    }
                }
            }
        }
    }
}
</style>
<template>
    <nav class="home-navbar">
        <ul class="d-flex justify-content-center">
            <li>
                <img src="../assets/img/dark_link1.png" width="48px" height="48px" alt="link-icon">
                <router-link to="/">關於我們</router-link>
            </li>
            <li>
                <img src="../assets/img/dark_link2.png" width="48px" height="48px" alt="link-icon">
                <router-link to="/">客房介紹</router-link>
            </li>
            <li>
                <img src="../assets/img/dark_link3.png" width="48px" height="48px" alt="link-icon">
                <router-link to="/">住宿服務</router-link>
            </li>
            <li>
                <img src="../assets/img/dark_link4.png" width="48px" height="48px" alt="link-icon">
                <router-link to="/">交通指引</router-link>
            </li>
            <li>
                <img src="../assets/img/dark_link5.png" width="48px" height="48px" alt="link-icon">
                <router-link to="/">最新消息</router-link>
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

                &:hover {
                    color: #419D78;
                }
            }
        }
    }
}
</style>
<template>
    <nav class="navbar">
        <ul class="d-flex justify-content-end py-sm px-lg">
            <li>
                <router-link to="/" class="d-flex align-items-center">
                    <img src="../assets/img/logo.png" alt="logo">
                    綠柳宿旅
                </router-link>
            </li>
            <li>
                <img src="../assets/img/light_link1.png" width="48px" height="48px" alt="link-icon">
                <router-link to="/">關於我們</router-link>
            </li>
            <li>
                <img src="../assets/img/light_link2.png" width="48px" height="48px" alt="link-icon">
                <router-link to="/">客房介紹</router-link>
            </li>
            <li>
                <img src="../assets/img/light_link3.png" width="48px" height="48px" alt="link-icon">
                <router-link to="/">住宿服務</router-link>
            </li>
            <li>
                <img src="../assets/img/light_link4.png" width="48px" height="48px" alt="link-icon">
                <router-link to="/">交通指引</router-link>
            </li>
            <li>
                <img src="../assets/img/light_link5.png" width="48px" height="48px" alt="link-icon">
                <router-link to="/">最新消息</router-link>
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
            
            img {
                width: 2rem;
                height: 2rem;
                margin-right: 0.5rem;
            }

            a {
                color: #959CC4;
                font-weight: bold;

                &:hover {
                    color: #419D78;
                }
            }
        }
    }
}
</style>
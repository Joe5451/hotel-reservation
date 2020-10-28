<template>
    <footer class="footer py-md px-lg">
        <div class="d-flex align-items-center">
            <img src="../assets/img/QRcode.png" alt="QRcode" class="QRcode mr-lg" width="50px" height="50px">
            <div class="mr-lg">
                <p class="mb-xs">Tel: 02-24884712</p>
                <p>Fax: 02-84884712</p>
            </div>
            <div>
                <p class="mb-xs">Email： reloading.hotel@gmail.com</p>
                <p>Add： 新北市小山區五月鄉三雲裡5號之1</p>
            </div>
            <ul class="d-flex language-select">
                <li class="active">繁體中文</li>
                <li>简体中文</li>
                <li>日本語</li>
                <li>English</li>
                <li>한국어</li>
            </ul>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    background: #2D3047;
    color: #959CC4;
    position: relative;
    z-index: 1;

    .QRcode {
        background: #fff;
    }

    .language-select {
        margin-left: auto;
        position: relative;

        li {
            padding: 8px 16px;
            cursor: pointer;

            &:not(:last-child) {
                border-right: 1px solid #959CC4;
            }

            &.active {
                color: #fff;
            }
        }

        &:before, &:after {
            display: none;
            position: absolute;
            bottom: 100%;
            font-weight: bold;
        }

        &:before {
            content: '';                    
            left: 40px;
            transform: translate(0, -5px);
            border-width: 15px 10px 0;
            border-style: solid;
            border-color: rgba(149, 156, 196, 0.8) transparent transparent;
        }
        
        &:after {
            content: '目前僅開放繁體中文';
            left: 50px;
            transform: translate(-50%, -20px);
            background: rgba(149, 156, 196, 0.8);
            border-radius: 5px;
            color: #2D3047;
            padding: 10px 20px;
            text-align: center;
            letter-spacing: 2px;
        }

        &:hover {
            &:before, &:after {
                display: block;
            }
        }
    }
}
</style>
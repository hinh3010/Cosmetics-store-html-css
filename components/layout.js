const footer = document.querySelector('#footer')
const header = document.querySelector('#myHeader')
import { htmlSubMenu } from './subMenu.js'

footer.innerHTML = `
<div class="grid wide">
<div class="row">
    <div class="col l-3 m-6 s-12">
        <h3 class="footer__title">Menu</h3>
        <ul class="footer__list">
            <li class="footer__item">
                <a href="#" class="footer__link">Trang điểm</a>
            </li>
            <li class="footer__item">
                <a href="#" class="footer__link">Chăm sóc da</a>
            </li>
            <li class="footer__item">
                <a href="#" class="footer__link"
                    >Chăm sóc tóc</a
                >
            </li>
            <li class="footer__item">
                <a href="#" class="footer__link">Nước hoa</a>
            </li>
            <li class="footer__item">
                <a href="#" class="footer__link"
                    >Chăm sóc toàn thân
                </a>
            </li>
        </ul>
    </div>
    <div class="col l-3 m-6 s-12">
        <h3 class="footer__title">Hỗ trợ khách hàng</h3>
        <ul class="footer__list">
            <li class="footer__item">
                <a href="#" class="footer__link"
                    >Hướng dẫn mua hàng</a
                >
            </li>
            <li class="footer__item">
                <a href="#" class="footer__link"
                    >Giải đáp thắc mắc</a
                >
            </li>
            <li class="footer__item">
                <a href="#" class="footer__link"
                    >Chính sách mua hàng</a
                >
            </li>
            <li class="footer__item">
                <a href="#" class="footer__link"
                    >Chính sách đổi trả</a
                >
            </li>
        </ul>
    </div>
    <div class="col l-3 m-6 s-12">
        <h3 class="footer__title">Liên hệ</h3>
        <ul class="footer__list">
            <li class="footer__item">
                <span class="footer__text">
                    <i class="fas fa-map-marked-alt"></i> 116
                    Hà Cầu Hà Đông, thành phố : Hà Nội
                </span>
            </li>
            <li class="footer__item">
                <a href="#" class="footer__link">
                    <i class="fas fa-phone"></i> 076 922 0162
                </a>
            </li>
            <li class="footer__item">
                <a href="#" class="footer__link">
                    <i class="fas fa-envelope"></i>
                    adu@gmail.com
                </a>
            </li>
            <li class="footer__item">
                <div class="social-group">
                    <a href="#" class="social-item"
                        ><i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="social-item"
                        ><i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="social-item"
                        ><i class="fab fa-pinterest-p"></i>
                    </a>
                    <a href="#" class="social-item"
                        ><i class="fab fa-invision"></i>
                    </a>
                    <a href="#" class="social-item"
                        ><i class="fab fa-youtube"></i>
                    </a>
                </div>
            </li>
        </ul>
    </div>
    <div class="col l-3 m-6 s-12">
        <h3 class="footer__title">Đăng kí</h3>
        <ul class="footer__list">
            <li class="footer__item">
                <span class="footer__text"
                    >Đăng ký để nhận được được thông tin ưu đãi
                    mới nhất từ chúng tôi.</span
                >
            </li>
            <li class="footer__item">
                <div class="send-email">
                    <input
                        class="send-email__input"
                        type="email"
                        placeholder="Nhập Email..."
                    />
                    <a href="#" class="send-email__link">
                        <i class="fas fa-paper-plane"></i>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>
</div>
`

header.innerHTML = `
<div class="grid wide">
                <div class="header__top">
                    <a href="index.html" class="header__logo">
                        <img
                            style="width: 200px"
                            src="./img/logo/logo.png"
                            alt=""
                        />
                    </a>
                    <h1 style="font-size:30px ; color : width">Tiktok</h1>
                </div>
            </div>
            <div class="header__nav" style="padding-bottom: 20px">
                <ul class="header__nav-list">
                    <li class="header__nav-item index">
                        <a href="index.html" class="header__nav-link"
                            >Trang chủ</a
                        >
                    </li>
                    <li class="header__nav-item">
                        <a href="#" class="header__nav-link">Giới Thiệu</a>
                    </li>
                    <li class="header__nav-item product-nav">
                        <a href="#" class="header__nav-link">Sản Phẩm</a>
                        <div id="sub-menu" class="sub-nav-wrap grid wide">
                        ${htmlSubMenu}
                        </div>
                    </li>
                    <li class="header__nav-item">
                        <a href="news.html" class="header__nav-link">Tin Tức</a>
                    </li>

                    <li class="header__nav-item">
                        <a href="contact.html" class="header__nav-link"
                            >Liên Hệ</a
                        >
                    </li>
                </ul>
            </div>
`
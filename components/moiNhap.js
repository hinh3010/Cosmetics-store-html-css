import { newProduct } from "./products.js";

const container = document.querySelector("#container_moinhap");


const htmlContainer = newProduct.map((item) => {
    return `
    <div class="col l-2 m-4 s-6">
        <div class="product">
            <div class="product__avt"
                style=" background-image: url(${item.image}); "
            ></div>
            <div class="product__info">
                <h3 class="product__name">
                    ${item.name}
                </h3>
                <div class="product__price">
                    <div class="price__old">
                        ${item.price} đ
                    </div>
                    <div class="price__new">
                    ${item.price - item.price * item.giaGia / 100}
                        <span class="price__unit">đ</span>
                    </div>
                </div>
                <div class="product__sale">
                    <span class="product__sale-percent" >${item.giaGia}%</span >
                    <span class="product__sale-text" >Giảm</span >
                </div>
            </div>
            <a href="product.html" class="viewDetail" >Xem chi tiết</a >
            <a href="cart.html" class="addToCart" >Thêm vào giỏ</a >
        </div>
    </div>
    `;
});
container.innerHTML = htmlContainer.join("");

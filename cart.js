

const totalPriceIdSelect = document.getElementById("total-price");
const totalPriceContentIdSelect = document.getElementById("total-price-content");
const getDiscountValueTarget = document.getElementById("discount-value");
const getErrorInputTarget = document.getElementById("error-input");
const getTotalAmountTarget = document.getElementById("toal-amount");
const getNoShopingTarget = document.getElementById("no-shopping");
let cartProducts = [];
let addQuantityId = 1;
let subtotalId = 10;

const addQuantity = (id) => {
    const cartFindIndex = cartProducts.findIndex((data) => data?.id === id);

    if (cartFindIndex > -1) {
        cartProducts[cartFindIndex].quantity = cartProducts[cartFindIndex].quantity + 1;
        let subTotalAmount = cartProducts[cartFindIndex].subtotal;
        let price = cartProducts[cartFindIndex].price;
        cartProducts[cartFindIndex].subtotal = subTotalAmount + price;
        incresAndDecres(cartProducts[cartFindIndex].quantityId, cartProducts[cartFindIndex].subtotalPriceId, cartProducts[cartFindIndex]);
        // console.log("quantity-->", cartProducts[cartFindIndex].quantity);
    }
    else {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Item add',
            showConfirmButton: false,
            timer: 1300
        });
        const cartProduct = products.find((data) => data.id === id);
        cartProduct.quantity = 1;
        cartProduct.subtotal = cartProduct.price;
        cartProduct.quantityId = "a" + addQuantityId++;
        cartProduct.subtotalPriceId = 'b' + subtotalId++;
        cartProducts.push(cartProduct);
        getNoShopingTarget.classList.add("hidden");
        // console.log("global counter-->", addQuantityId, subtotalId)
        addToCart();
        cartTotalPrice();
    }
}

const reducedQuantity = (id) => {
    const cartFindIndex = cartProducts.findIndex((data) => data?.id === id);
    console.log("print")
    if (cartFindIndex > -1) {
        const getMinusBtnElement = document.getElementById(id);
        if (cartProducts[cartFindIndex].quantity === 1) {
            getMinusBtnElement.classList.add("disabled");
        } else if (cartProducts[cartFindIndex].quantity > 1) {
            getMinusBtnElement.classList.remove("disabled");
            cartProducts[cartFindIndex].quantity = cartProducts[cartFindIndex].quantity - 1;
            let subTotalAmount = cartProducts[cartFindIndex].subtotal;
            let price = cartProducts[cartFindIndex].price;
            cartProducts[cartFindIndex].subtotal = subTotalAmount - price;

            incresAndDecres(cartProducts[cartFindIndex].quantityId, cartProducts[cartFindIndex].subtotalPriceId, cartProducts[cartFindIndex]);
        }


    }

}

const incresAndDecres = (quantityId, subtotalId, item) => {
    const getQuantiyElement = document.getElementById(quantityId);
    const getSubtotalElement = document.getElementById(subtotalId);
    // console.log("item-->", item);
    getQuantiyElement.innerText = item.quantity;
    getSubtotalElement.innerText = item.subtotal.toFixed(2);
    cartTotalPrice();
}

const cartTotalPrice = () => {
    const totalPrice = cartProducts.reduce((pre, cur) => pre + cur.subtotal, 0);
    if (totalPrice) {
        totalPriceContentIdSelect.classList.remove("hidden");
        totalPriceIdSelect.innerText = totalPrice.toFixed(2);
        discountCalculate(true);
    } else {
        totalPriceContentIdSelect.classList.add("hidden");
    }
};


const discountCalculate = (check) => {
    const value = parseInt(getDiscountValueTarget.value);
    if (isNaN(value)) {
        if (check) {
            getErrorInputTarget.classList.add("hidden");
        }
        else {
            getErrorInputTarget.classList.remove("hidden");
        }

        getTotalAmountTarget.innerText = "You didn't apply";
    }
    else if (value <= 0) {
        getErrorInputTarget.classList.remove("hidden");
        getTotalAmountTarget.innerText = "You didn't apply";
    }
    else {
        const totalPrice = parseFloat(totalPriceIdSelect.textContent);
        const discount = totalPrice - ((value / 100) * totalPrice);
        getErrorInputTarget.classList.add("hidden");
        getTotalAmountTarget.innerText = discount.toFixed(2);
    }
}

getDiscountValueTarget.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        discountCalculate();
    }
})





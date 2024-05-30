const cartShoppingId = document.getElementById("cart");

let allCartTables = [];

const cartTableUpdate = (cartData) => {
  console.log("cartupdate-->", cartData);
  const cartUpdate = `
  <tr class="border-solid border-[1px] border-current border-collapse">
    <td class="border-solid border-[1px] border-current border-collapse px-7">Product</td>
    <td class="border-solid border-[1px] border-current border-collapse">
      <div class="w-[80px] mx-auto">
        <img
          src=${cartData.img}
          class=""
          alt=""
        />
      </div>
    </td>
  </tr>
  <tr class="border-solid border-[1px] border-current border-collapses">
    <td class="border-solid border-[1px] border-current border-collapse">Name</td>
    <td class="border-solid border-[1px] border-current border-collapse">
      ${cartData?.name}
    </td>
  </tr>
  <tr class="border-solid border-[1px] border-current border-collapses">
    <td class="border-solid border-[1px] border-current border-collapse">Price</td>
    <td class="border-solid border-[1px] border-current border-collapse">
      ${cartData.price}
    </td>
  </tr>
  <tr class="border-solid border-[1px] border-current border-collapses">
    <td class="border-solid border-[1px] border-current border-collapse">Quantity</td>
    <td class="border-solid border-[1px] border-current border-collapse">
      <i onclick="addQuantity('${cartData.id}')" class="fa-solid fa-plus cursor-pointer"></i>
      <span id="${cartData.quantityId}" class="px-3">${cartData.quantity}</span>
      <i onclick="reducedQuantity('${cartData.id}')" id="${cartData.id}" class="fa-solid fa-minus cursor-pointer"></i>
    </td>
  </tr>
  <tr class="border-solid border-[1px] border-current border-collapses">
    <td class="border-solid border-[1px] border-current border-collapse">Subtotal</td>
    <td class="border-solid border-[1px] border-current border-collapse">
      <sapn id="${cartData.subtotalPriceId}">${(cartData.subtotal).toFixed(2)}</sapn>   
    </td>
  </tr>
  <tr class="border-solid border-[1px] border-current border-collapses">
    <td class="border-solid border-[1px] border-current border-collapse">Remove</td>
    <td class="border-solid border-[1px] border-current border-collapse">
      <i onclick="removeCartItem('${cartData.id}')" class="fa-solid fa-trash text-red-400 cursor-pointer"></i>
    </td>
  </tr>
`
  return cartUpdate;
}

const addToCart = () => {
  cartShoppingId.innerHTML = "";
  cartProducts.forEach((data) => {
    const newTable = document.createElement("table");
    newTable.classList.add("border-solid", "border-[1px]", "border-current", "border-collapse", "text-center", "mb-4", "w-full");
    newTable.innerHTML = cartTableUpdate(data);
    cartShoppingId.appendChild(newTable);
  });

};

const removeCartItem = (id) => {
  const removeProductCart = cartProducts.filter(data => data.id !== id);
  const deleteProductName = cartProducts.find(data => data.id === id).name;

  Swal.fire({
    title: 'Are you sure?',
    text: deleteProductName,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      cartProducts = [...removeProductCart];
      if (!cartProducts.length) {
        getNoShopingTarget.classList.remove("hidden");
        getDiscountValueTarget.value = null;
      }
      addToCart();
      cartTotalPrice();
      Swal.fire(
        'Deleted!',
        `${deleteProductName}`,
        'success'
      )
    }
  })

};

const clearCart = () => {
  if (cartProducts.length) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Delete All Cart",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, clear all cart'
    }).then((result) => {
      if (result.isConfirmed) {
        allCartTables = [];
        cartProducts = [];
        addToCart();
        getDiscountValueTarget.value = null;
        totalPriceContentIdSelect.classList.add("hidden");
        getNoShopingTarget.classList.remove("hidden");
        Swal.fire(
          'Deleted!',
          'Clear All Cart',
          'success'
        )
      }
    });
  }


};






// dom element 
const productListId = document.getElementById("product-list");

// product list card
products.forEach((data) => {

  // console.log("product>", data);
  const cardNewElement = document.createElement("div");
  cardNewElement.classList.add("card", "bg-base-100", "shadow-sm", "border-solid", "border-[2px]", "rounded-lg", "border-[#95A0A7]", "relative");
  cardNewElement.innerHTML = `
    <figure class="px-2 pt-2 relative">
    <img
      src=${data?.img}
      alt="Shoes"
      class="rounded-xl"
    />
  </figure>
  <div class="card-body items-center text-center mt-2">
    <h2 class="break-words">${data.name}</h2>
    <p class="mt-1 mb-8">price: ${data.price}</p>
    <div class="card-actions mt-1">
      <button onclick="addQuantity('${data.id}')" class="w-[100%] bg-[#FFE0B3] border-[1px] border-solid border-[#95A0A7] absolute bottom-0 left-0 cursor-pointer">
        Add to Cart
      </button>
    </div>
  </div>
    `
  productListId.appendChild(cardNewElement);
})
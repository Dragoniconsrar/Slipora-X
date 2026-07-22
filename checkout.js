// Load Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");
const subtotal = document.getElementById("subtotal");
const delivery = document.getElementById("delivery");
const grandTotal = document.getElementById("grandTotal");

function renderCart() {

    cartItems.innerHTML = "";

    if(cart.length === 0){

        cartItems.innerHTML = `
            <h3 style="text-align:center;padding:40px;">
                Your Cart is Empty 🛒
            </h3>
        `;

        subtotal.innerText="₹0";
        delivery.innerText="₹0";
        grandTotal.innerText="₹0";

        return;
    }

    let total=0;

    cart.forEach((item,index)=>{

        total += item.price * (item.qty || 1);

        cartItems.innerHTML += `

        <div class="cart-item">

            <img src="${item.img}" class="cart-img">

            <div class="cart-info">

                <h3>${item.name}</h3>

                <p>₹${item.price}</p>

                <div class="qty">

                    <button onclick="decreaseQty(${index})">−</button>

                    <span>${item.qty || 1}</span>

                    <button onclick="increaseQty(${index})">+</button>

                </div>

                <button class="remove-btn"
                onclick="removeItem(${index})">

                🗑 Remove

                </button>

            </div>

        </div>

        `;

    });

    let deliveryCharge=0;

    if(total<499){

        deliveryCharge=49;

    }

    subtotal.innerText="₹"+total;

    delivery.innerText=deliveryCharge==0?"FREE":"₹"+deliveryCharge;

    grandTotal.innerText="₹"+(total+deliveryCharge);

}

function increaseQty(index){

    cart[index].qty=(cart[index].qty||1)+1;

    saveCart();

}

function decreaseQty(index){

    if((cart[index].qty||1)>1){

        cart[index].qty--;

    }

    saveCart();

}

function removeItem(index){

    cart.splice(index,1);

    saveCart();

}

function saveCart(){

    localStorage.setItem("cart",JSON.stringify(cart));

    renderCart();

}

document.querySelector(".order-btn").onclick = function () {

    const name = document.querySelector('input[placeholder="Full Name"]').value.trim();
    const phone = document.querySelector('input[placeholder="Phone Number"]').value.trim();
    const email = document.querySelector('input[placeholder="Email Address"]').value.trim();
    const address = document.querySelector("textarea").value.trim();

    if (!name || !phone || !email || !address) {
        alert("Please fill all shipping details.");
        return;
    }

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    alert("🎉 Order Placed Successfully!\n\nThank you for shopping with STEP X.");

    localStorage.removeItem("cart");

    window.location.href = "index.html";
}

renderCart();
let deliveryCharge = total >= 499 ? 0 : 49;

/* ==========================================
   STEP X CHECKOUT V2
   PART 3A
========================================== */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let discount = 0;

const cartItems = document.getElementById("cartItems");

const subtotal = document.getElementById("subtotal");

const delivery = document.getElementById("delivery");

const discountText = document.getElementById("discount");

const grandTotal = document.getElementById("grandTotal");

const saveCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

/* ===========================
RENDER CART
=========================== */

function renderCart() {

    if (cart.length === 0) {

        cartItems.innerHTML = `
        <div class="empty-cart">

            <h3>Your cart is empty 🛒</h3>

            <p>Add products before checkout.</p>

        </div>
        `;

        subtotal.textContent = "₹0";

        delivery.textContent = "₹0";

        discountText.textContent = "-₹0";

        grandTotal.textContent = "₹0";

        return;
    }

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.qty;

        cartItems.innerHTML += `

<div class="cart-item">

<img
src="${item.img}"
class="cart-image"
alt="${item.name}">

<div class="cart-details">

<h4>${item.name}</h4>

<p>${item.desc}</p>

<div class="cart-price">

₹${item.price}

</div>

<div class="quantity">

<button onclick="decreaseQty(${index})">

−

</button>

<span>

${item.qty}

</span>

<button onclick="increaseQty(${index})">

+

</button>

</div>

<button
class="remove-btn"
onclick="removeItem(${index})">

Remove

</button>

</div>

</div>

`;

    });

    let deliveryCharge = total >= 499 ? 0 : 49;

    let finalTotal =
        total +
        deliveryCharge -
        discount;

    subtotal.textContent =
        "₹" + total;

    delivery.textContent =
        deliveryCharge === 0
        ? "FREE"
        : "₹" + deliveryCharge;

    discountText.textContent =
        "-₹" + discount;

    grandTotal.textContent =
        "₹" + finalTotal;

}

/* ===========================
QUANTITY
=========================== */

function increaseQty(index){

    cart[index].qty++;

    saveCart();

    renderCart();

}

function decreaseQty(index){

    if(cart[index].qty>1){

        cart[index].qty--;

    }else{

        cart.splice(index,1);

    }

    saveCart();

    renderCart();

}

/* ===========================
REMOVE
=========================== */

function removeItem(index){

    cart.splice(index,1);

    saveCart();

    renderCart();

}

/* ===========================
INITIAL LOAD
=========================== */

renderCart();
/* ===========================
COUPON
=========================== */

const couponInput = document.getElementById("couponCode");
const couponBtn = document.getElementById("applyCouponBtn");
const couponMessage = document.getElementById("couponMessage");

let couponApplied = false;

couponBtn.addEventListener("click", () => {

    const code = couponInput.value.trim().toUpperCase();

    if (couponApplied) {

        couponMessage.style.color = "#ffd43b";
        couponMessage.textContent = "Coupon already applied.";
        return;

    }

    let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    if (code === "STEPX10") {

        discount = Math.floor(total * 0.10);

        couponApplied = true;

        couponMessage.style.color = "#39ff14";
        couponMessage.textContent = "Coupon applied successfully!";

    } else {

        discount = 0;

        couponMessage.style.color = "#ff4d4f";
        couponMessage.textContent = "Invalid coupon code.";

    }

    renderCart();

});

/* ===========================
PLACE ORDER
=========================== */

const placeOrderBtn = document.getElementById("placeOrderBtn");

placeOrderBtn.addEventListener("click", () => {

    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const email = document.getElementById("email").value.trim();

    const address = document.getElementById("address").value.trim();

    if (cart.length === 0) {

        alert("Your cart is empty.");
        return;

    }

    if (!name || !phone || !email || !address) {

        alert("Please fill all shipping details.");
        return;

    }

    if (!/^[0-9]{10}$/.test(phone)) {

        alert("Enter a valid 10-digit phone number.");
        return;

    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {

        alert("Enter a valid email address.");
        return;

    }

    placeOrderBtn.disabled = true;
    placeOrderBtn.textContent = "Placing Order...";

    setTimeout(() => {

        alert(
`🎉 Order Placed Successfully!

Thank you for shopping with Step X.

Your order has been confirmed.`
        );

        cart = [];

        discount = 0;

        couponApplied = false;

        localStorage.removeItem("cart");

        window.location.href = "index.html";

    }, 1500);

});

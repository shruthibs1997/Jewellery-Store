function showitems(d) {
    let items = d;
    let div = document.getElementById("display");
    div.innerHTML = null;
    items.forEach(function(el) {
        appenditems(el)
    });
}
let p = 0;
function appenditems(el) {
    p = p + el.Price;
    let div_dis = document.getElementById("display");
    let div = document.createElement("div");
    let p_name = document.createElement("div");
    p_name.innerHTML = el.Name;
    let p_price = document.createElement("div");
    p_price.innerHTML = el.Price;
    let p_image = document.createElement("img");
    p_image.src = el.Image;
    let p_brand = document.createElement("div");
    p_brand.innerHTML = el.Brand;
    div.append(p_image, p_name, p_price, p_brand);
    div_dis.append(div);
    div.addEventListener("mouseover", function () {
        p_image.src = el.Image1;
    })
    div.addEventListener("mouseout", function () {
        p_image.src = el.Image;
    })
    let div1 = document.getElementById("box1");
    div1.innerHTML = p;
}

showitems(JSON.parse(localStorage.getItem("jcart")));

function coupon() {
    let input = document.getElementById("masai").value;
    if (input == "masai30") {
        p = p - (p * 0.3);
        let div1 = document.getElementById("box1");
        div1.innerHTML = p;
    }
}

function checkout() {
    window.location.href="checkout.html"
}
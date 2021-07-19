var arr=[
    {
        Image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        Name: "Ring",
        Price: 15000,
        Brand: "Malbar",
        Image1:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTu5-11OSfVufhWGiak00W80aaXgW1ShG3wXDEcfGgLAI5sjU7d3s0xN-yqkBlTd8b0Re5TbZuCUg&usqp=CAc'
    },
    {
        Image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5lY2tsYWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        Name: "Necklace",
        Price: 45000,
        Brand: "Kalyan",
        Image1:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRs3x7ggIsesAxutSDGWTgwf99boPH3LwzrdnuRe2JXjRBfGk9otz3v41IiuMCQVCBcOC9d1Hspl5UrltIyIULCBUoC8xVEbsJ7g7LAMIEblh8y9KvDJpkBZw&usqp=CAc'
    },
     {
        Image: "https://images.unsplash.com/photo-1598472142296-b9e8f89bd9a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJhY2VsZXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        Name: "Bracelet",
        Price: 20000,
         Brand: "kazana",
         Image1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJNFOzUL69s3m8gAElJ34Gumz1vyC1zTIBQ&usqp=CAU'
        
    },
     {
        Image: "https://images.unsplash.com/photo-1588444650700-fd887f15a9e7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZWFycmluZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        Name: "earring",
        Price: 25000,
         Brand: "kazana",
        Image1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqHh-TyAvikcd9l7okcjxE2_xT6q8N8E2_iw&usqp=CAU'
    }
]

if (localStorage.getItem("gold") == null) {
    localStorage.setItem("gold", JSON.stringify(arr));
}

function showitems(d) {
    let items = d;
    let div = document.getElementById("display");
    div.innerHTML = null;
    items.forEach(function(el) {
        appenditems(el)
    });
}
function appenditems(el) {
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
    let butt = document.createElement("button");
    butt.textContent = "Add to Cart"
    butt.addEventListener('click', function () {
        cartproducts(el);
    })
    div.append(p_image, p_name, p_price, p_brand, butt);
    div_dis.append(div);
    div.addEventListener("mouseover", function () {
        p_image.src = el.Image1;
    })
    div.addEventListener("mouseout", function () {
        p_image.src = el.Image;
    })
}

showitems(JSON.parse(localStorage.getItem("gold")));

function lowtohigh() {
    let items = JSON.parse(localStorage.getItem("gold"));
    items.sort(function (a, b) {
        return a.Price - b.Price;
    });
    showitems(items)
}
function hightolow() {
    let items = JSON.parse(localStorage.getItem("gold"));
    items.sort(function (a, b) {
        return b.Price - a.Price;
    });
    showitems(items)
}

function malbar() {
    let items = JSON.parse(localStorage.getItem("gold"));
    let arr = [];
    for (let i = 0; i < items.length; i++){
        if (items[i].Brand == 'Malbar') {
            arr.push(items[i]);
        }
    }
    showitems(arr);
}
function kalyan() {
    let items = JSON.parse(localStorage.getItem("gold"));
    let arr = [];
    for (let i = 0; i < items.length; i++){
        if (items[i].Brand == 'Kalyan') {
            arr.push(items[i]);
        }
    }
    showitems(arr);
}
function kazana() {
    let items = JSON.parse(localStorage.getItem("gold"));
    let arr = [];
    for (let i = 0; i < items.length; i++){
        if (items[i].Brand == 'kazana') {
            arr.push(items[i]);
        }
    }
    showitems(arr);
}

function cart() {
    window.location.href = "cart.html";
}

function cartproducts(el) {
    let arr = localStorage.getItem("jcart")
    if (arr == null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem("jcart"));
    }
    arr.push(el);
    localStorage.setItem("jcart", JSON.stringify(arr));
}
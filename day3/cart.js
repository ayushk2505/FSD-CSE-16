const cartProducts = document.getElementById("cart-products")

const showProduct = (() => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = localStorage.getItem("Image")
    Image.alt = "product img here";

    const title = document.createElement("h1");
    title.InnerText = localStorage.getItem("title");

    const price = document.createElement("h2");
    localStorage.getItem("price")
    price.InnerText = localStorage.getItem("price")


      div.appendChild(img)
        div.appendChild(title)
        div.appendChild(price)
         CartProducts.appendChild(div);

})
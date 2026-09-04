const products = document.getElementById("products");
console.log(products);

let productsData = [];
const getProductData = async () => {
 console.log("iinside function");
 
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json()

    productsData = data.products;
    console.log(productsData);

    productsData.map((product) => {
        console.log("here");

        const div = document.createElement("div")
        const img = document.createElement("img")
          img.src = product.thumbnail
        const title = document.createElement("h3")
        const price = document.createElement("p")
        const incrementBtn = document.createElement("button")
        const decrementBtn = document.createElement("button")
        const span = document.createElement("span")


        title.textContent = product.title
        img.style.width = "100px"
        price.textContent = `$${product.price}`
        incrementBtn.textContent = "+"
        decrementBtn.textContent = "-"
        span.textContent = "0"

        div.style.border = "1px solid #ddd"
        div.style.padding = "10px"
        div.style.margin = "10px"
        div.style.display = "inline-block"

        div.appendChild(img)
        div.appendChild(title)
        div.appendChild(price)
        div.appendChild(decrementBtn)
        div.appendChild(span)
        div.appendChild(incrementBtn)

        products.appendChild(div)
        let counter = 0 ;


        incrementBtn.addEventListener("click" , ()=>{
            counter++
            span.innerText = counter ;
            localStorage.setItem("Image" , product.thumbnail)
            localStorage.setItem("title" , product.title)

            localStorage.setItem("price" , product.price)
        } )

        decrementBtn.addEventListener("click" ,() => {
            if(counter > 0){
            counter--
                    span.innerText = counter ;}
                    
        })
    })
}

getProductData();

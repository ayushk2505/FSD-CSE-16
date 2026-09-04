const showData = async() => {
 const res =  await fetch("https://dummyjson.com/products")
  // fetch function api sai data ko retreve karke deta hai 
 document.getElementById('fetchBtn').addEventListener('click', showData)
  const data = await res.json();
    // API returns products array under `products` key
    const products = data.products
    // for complete data console.log(data) use kr loa 
    console.log(products)
}



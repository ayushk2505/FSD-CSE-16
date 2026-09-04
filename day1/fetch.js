// const getProduct = () => {
//    const res =  fetch("https://dummyjson.com/products") // fetch function api sai data ko retreve karke deta hai 
//     console.log(res)
// }


// getProduct(); // it gives  a promise as a output 


// const getProduct = async () => {
//    const res =  await fetch("https://dummyjson.com/products") // fetch function api sai data ko retreve karke deta hai 
//     console.log(res)
// }


// getProduct(); // it gives  a response as a output 

const getProduct = async () => {
    const res =  await fetch("https://dummyjson.com/products") // fetch function api sai data ko retreve karke deta hai 
    const data = await res.json();
    // API returns products array under `products` key
    console.log(data.products)
    // for complete data console.log(data) use kr loa 
}


getProduct(); // it gives  a  products data
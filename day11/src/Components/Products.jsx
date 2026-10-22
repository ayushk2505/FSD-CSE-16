import React from 'react'
const Products = ({ products }) => {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto"
        }}>
            {products.map((product) =>
                <div style={{ border: "2px solid black" }}>
                    <img src={product.thumbnail}></img>
                    <h1>{product.title}</h1>
                    <h1>{product.price}$</h1>
                </div>)}
        </div>
    )
}
export default Products
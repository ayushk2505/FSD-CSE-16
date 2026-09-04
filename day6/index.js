const getProductData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    return data.products;
};

const HeaderComponent = () => {
    return (
        <div
            style={{
                textAlign: "center",
                backgroundColor: "black",
                color: "white"
            }}
        >
            <h1>E-commerce webpage</h1>
        </div>
    );
};

const ProductComponent = ({ product }) => {
    console.log(product);

    return (
        <div id="prod-container">
            {product.map((product) => (
                <div >
                    <img src={product.thumbnail}></img>
                    <h1>{product.title}</h1>
                </div>
            ))}
        </div>
    );
};

const FooterComponent = () => {
    return (
        <div
            style={{
                textAlign: "center",
                backgroundColor: "black",
                color: "white"
            }}
        >
            <h1>Copyright all rights are reserved.</h1>
        </div>
    );
};

const App = async () => {
    const root = ReactDOM.createRoot(
        document.getElementById("root")
    );

    const products = await getProductData();

    const reactElement = (
        <>
            <HeaderComponent />
            <ProductComponent product={products} />
            <FooterComponent />
        </>
    );

    root.render(reactElement);
};

App();
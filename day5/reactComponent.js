const root = ReactDOM.createRoot(document.getElementById("root"));
const HeaderComponent = () => {
    return (
        <div style={{
            textAlign: "center",
            backgroundColor: "ActiveBorder",
            color: "white"
        }}>
            <h1>E-commerce Webpage</h1>
        </div>
    )
}
const ProductComponent = () => {
    return (
        <div id="prod-container">
            <div>Product-01</div>
            <div>Product-02</div>
            <div>Product-03</div>
            <div>Product-04</div>
            <div>Product-05</div>
            <div>Product-06</div>
        </div>
    )
}
const FooterComponent = () => {
    return (<div>
        <h1>Copyright all rights are reserved</h1>
    </div>)
}
const reactElement = <>
    {HeaderComponent()}
    <ProductComponent />
    <FooterComponent></FooterComponent>
</>
root.render(reactElement);

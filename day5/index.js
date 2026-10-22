{/* <div>
    <div id="inner-div-1">
        <span>01</span>
        <span>01</span>
        <span>01</span>
        <span>01</span>
    </div>
     <div id="inner-div-2">
        <span>01</span>
        <span>01</span>
        <span>01</span>
        <span>01</span>
    </div>
</div> */}
const div = document.getElementById("root");
const root = ReactDOM.createRoot(div);
// const divElement = React.createElement("div", {}, [
//     React.createElement("div", { id: "inner-div-1" }, [
//         React.createElement("span", {}, "01"),
//         React.createElement("span", {}, "01"),
//         React.createElement("span", {}, "01"),
//         React.createElement("span", {}, "01")
//     ]),
//     React.createElement("div", { id: "inner-div-2" }, [
//         React.createElement("span", {}, "01"),
//         React.createElement("span", {}, "01"),
//         React.createElement("span", {}, "01"),
//         React.createElement("span", {}, "01")
//     ])
// ]);
const divElement = <div>
    <div id="inner-div-1">
        <span>01</span>
        <span>01</span>
        <span>01</span>
        <span>01</span>
    </div>
    <div id="inner-div-2">
        <span>01</span>
        <span>01</span>
        <span>01</span>
        <span>01</span>
    </div>
</div>
root.render(divElement);

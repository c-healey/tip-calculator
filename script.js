
let price = document.getElementById("price");
let tipPercent = document.getElementById("tip-percent");
let tipAmount = document.getElementById("tip-amount");
let totalPrice = document.getElementById("total-price");
let tipSlider = document.getElementById("tip-slider");
let splitSlider = document.getElementById("split-slider");
let split = document.getElementById("split");
let splitBill = document.getElementById("split-bill");
let splitTotal = document.getElementById("split-total-price");
let splitTip = document.getElementById("split-tip-amount");

tipSlider.addEventListener("input", function () {
    // console.log("slider value", tipSlider.value);
    tipPercent.textContent = tipSlider.value;
    if (price.value > 0) {
        updateTotals();
        if (splitSlider.value > 1) {
            updateSplitTotals();
        }
    }
});
price.addEventListener("input", function () {
    console.log("price entered = ", price.textContent);
    updateTotals();
});

function updateTotals() {
    let priceEntered = price.value;
    console.log(priceEntered);
    let tipPercentEntered = tipPercent.textContent;
    let calculatedTip = parseFloat((priceEntered * tipPercentEntered) / 100);
    console.log("tip = ", calculatedTip, calculatedTip.toFixed(2))
    tipAmount.value = calculatedTip.toFixed(2);
    totalPrice.value = (calculatedTip + parseFloat(priceEntered)).toFixed(2);
};
function updateSplitTotals() {
    splitBill.value = (price.value / splitSlider.value).toFixed(2);
    splitTip.value = (tipAmount.value / splitSlider.value).toFixed(2);
    splitTotal.value = (parseFloat(splitBill.value) + parseFloat(splitTip.value)).toFixed(2);
}

splitSlider.addEventListener("input", function () {
    // console.log("slider value", tipSlider.value);
    split.textContent = splitSlider.value;
    if (price.value > 0) {
        updateSplitTotals();
    }
});

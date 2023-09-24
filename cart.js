function goToHome() {
    window.location = "./index.html";
}


const mainDiv = document.querySelector(".cart-div");
const addItems = document.getElementById("head");
const data = localStorage.getItem("cartArr");
const item = JSON.parse(data);




function render() {
    mainDiv.innerHTML = ""
    for (let i = 0; i < item.length; i++) {
        item[i].TotalCost = + `${item[i].Price * item[i].Quantity}`
        // console.log(item);
        mainDiv.innerHTML += `<div class="header">
    <h3>${item[i].brand}</h3>
    <img src="${item[i].img}" class="image">
    <h5>Model:${item[i].model}</h5>
    <h5>Ram:${item[i].ram}GB</h5>
    <h5>Rom:${item[i].rom}GB</h5>
    <h5>Camera:${item[i].camera}</h5>
    <h5>Price: ${item[i].Price}</h5>
        <h5>Quantity: ${item[i].Quantity}</h5>
        <h5>TotalCost: ${item[i].TotalCost}</h5>
        <button onclick="deleteProduct(${i})" class="delet-btn">Delete</button>
        <button onclick="add(${i})" class="plus">+</button>
        <span>${item[i].Quantity}</span>
        <button onclick="sub(${i})" class="minus">-</button>
        </div>`
    }
}


render()

function add(index) {
    mainDiv.innerHTML="";
    item[index].Quantity+=1
    render()

}

function sub(index) {
    mainDiv.innerHTML="";
    item[index].Quantity-=1
    render()
    if (item[index].Quantity===0) {
        mainDiv.innerHTML="";
        item.splice(index,1)
        render()
    }
}

function deleteProduct(index) {
    mainDiv.innerHTML="";
    item.splice(index,1);
    render()
    
}

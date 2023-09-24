const mobiles = document.getElementById('head');

const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        img: "https://images.priceoye.pk/tecno-camon-19-neo-pakistan-priceoye-5m02d-270x270.webp",
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        Price: 521
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        img: "https://images.priceoye.pk/tecno-camon-19-neo-pakistan-priceoye-5m02d-270x270.webp",
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        Price: 949
    },
    {
        brand: 'Infinix',
        model: 'z10',
        img: "https://images.priceoye.pk/tecno-camon-19-neo-pakistan-priceoye-5m02d-270x270.webp",
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        Price: 310
    },
    {
        brand: 'Tecno',
        model: 'Camon 19 Neo',
        img: "https://images.priceoye.pk/tecno-camon-19-neo-pakistan-priceoye-5m02d-270x270.webp",
        ram: 6,
        rom: 128,
        camera: '48 megapixel',
        Price: 450
    },
    {
        brand: 'Iphone',
        model: '14',
        img: "https://images.priceoye.pk/tecno-camon-19-neo-pakistan-priceoye-5m02d-270x270.webp",
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        Price: 399
    },
    {
        brand: 'Oppo',
        model: 'F11',
        img: "https://images.priceoye.pk/tecno-camon-19-neo-pakistan-priceoye-5m02d-270x270.webp",
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        Price: 330
    },
    {
        brand: 'Vivo',
        model: 'y20',
        img: "https://images.priceoye.pk/tecno-camon-19-neo-pakistan-priceoye-5m02d-270x270.webp",
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        Price: 499
    },

]

//  console.log(phones[1].brand);

for (let i = 0; i < phones.length; i++) {
    mobiles.innerHTML += `<div class="header">
    <h3>${phones[i].brand}</h3>
    <img src="${phones[i].img}" class="image">
    <h5>Model:${phones[i].model}</h5>
    <h5>Ram:${phones[i].ram}GB</h5>
    <h5>Rom:${phones[i].rom}GB</h5>
    <h5>Camera:${phones[i].camera}</h5>
    <h5>Price: ${phones[i].Price}</h5>
    
    <button class="btn" onclick="AddToCart(${i})">Add To Cart</button>
    </div>`





}

const cartArr = []
function AddToCart(index) {
    if (cartArr.includes(phones[index])) {
        // console.log("item is Existed");
        for (let i = 0; i < cartArr.length; i++) {
            if (cartArr[i] === phones[index]) {
                cartArr[i].Quantity += 1
            }


        }
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Item quantity Successfully updated',
            showConfirmButton: false,
            timer: 1500
        })
    } else {

        // console.log();

       
        phones[index].Quantity = 1
        cartArr.push(phones[index]);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Item Is Successfully Added',
            showConfirmButton: false,
            timer: 1500
        })

    }
    console.log("cartArr ==>", cartArr);

}


function goToCart() {
    const items = JSON.stringify(cartArr);
    localStorage.setItem("cartArr", items);
    window.location="./cart.html";

    
}
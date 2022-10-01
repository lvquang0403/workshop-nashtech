const manProduct = [
  {
    image: "./images/product-2.png",
    productName: "Man Product 1",
    productPrice: "1000",
  },
  {
    image: "./images/product-6.png",
    productName: "Man Product 2",
    productPrice: "1000",
  },
  {
    image: "./images/product-7.png",
    productName: "Man Product 3",
    productPrice: "1000",
  },
];

var manElems = manProduct.map((item) => {
  const manElement = `
  <div class="col-4">
    <div class="card" style="width: 18rem">
        <img
        src="${item.image}"
        class="card-img-top"
        alt="..."
        />
        <div class="card-body">
        <h5 class="card-title">${item.productName}</h5>
        <p class="card-text">
            Some quick example text to build on the card title and
            make up the bulk of the card's content.
        </p>
        <p class="card-text">
            ${item.productPrice}
        </p>
        <button class="btn btn-primary" onclick="addItem()">Add to cart</button>
        </div>
    </div>
</div>
`;

  return manElement;
});
manElems = manElems.join('')

document.getElementById("btn-generate-item-men").onclick = () => {
  const manContainerElem = document.getElementById("man-product");
  manContainerElem.innerHTML=manElems;
}

// const manContainerElem = document.getElementById("man-product");
// manContainerElem.innerHTML = womanElems;



// TODO 1: Change css for Product Items

// TODO 2: Generate dynamic "Men Products"

// TODO 3: Handle Add to cart event

// const onItemClick = () => {
//   selectedItem++;
//   document.getElementById("number-item").innerHTML =`<span id="number-item" class="p-1"> '${selectedItem}' </span>`
//   console.log(`<span id="number-item" class="p-1"> ${selectedItem.toString()} </span>`)
// };
 
const btnAddItems =  document.getElementsByClassName("btn btn-primary");
var selectedItem = 0;
function addItem() {
  selectedItem++;
  document.getElementById("number-item").innerText = selectedItem.toString();
  document.getElementById("number-item").style.padding = "4px"
  console.log(`<span id="number-item" class="p-1"> '${selectedItem}' </span>`)
}
for(let item of btnAddItems){
  item.addEventListener("click", addItem);
}

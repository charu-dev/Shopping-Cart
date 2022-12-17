let shopPage = document.querySelector('.shop');
let cart=JSON.parse(localStorage.getItem("data") ) || []
// cart=cart.split(localStorage.getItem('data')) || []
console.log(cart)
function generateFront(){
    shopPage.innerHTML=shopItemsData.map((x)=>
    
    {
    // console.log(cart,typeof cart)
    let search=cart.find((cartItem)=>cartItem.itemid==x.id)
    // search=search[0]
    return ` <div id=product-id-${x.id} class="item">
    <img width="220" src=${x.img} alt="">
    <div class="details">
      <h3>${x.name}</h3>
      <p>${x.desc}</p>
      <div class="price-quantity">
        <h2>$ ${x.price} </h2>
        <div class="buttons">
          <i onclick="countDec(${x.id})" class="bi bi-dash-lg"></i>
          <div id=${x.id} class="quantity">${
      search == undefined ? 0 : search.item
    }</div>
          <i onclick="countInc(${x.id})" class="bi bi-plus-lg"></i>
        </div>
      </div>
    </div>
</div>`}
    
    ).join();
}
generateFront()



function countInc(id){
    id=id.id;
    let search = cart.find((cartItem)=>cartItem.itemid===id);
    if(!search){
        cart.push({itemid: id, item: 1,});
    }
    else search.item++;
    console.log(cart,cart.join())
    updateCnt(id)
    localStorage.setItem("data",JSON.stringify(cart))
}
function countDec(id){
    id=id.id;

    let search = cart.find((cartItem)=>cartItem.itemid===id);
    if(search.item===0)return
    else if(!search)return
    else search.item--;
    updateCnt(id)
    localStorage.setItem("data",JSON.stringify(cart))
}

function updateCnt(id){
    let numbers=Array.from(document.querySelectorAll(".quantity"))
    let mynumber=numbers.find((x)=>x.id==id)
  
    let search = cart.find((cartItem)=>cartItem.itemid===mynumber.id);
    mynumber.innerHTML=search.item
    calculation()
}


let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = cart.map((x) => x.item).reduce((x, y) => x + y, 0);
  };
  
  calculation();
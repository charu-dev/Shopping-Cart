let cartPage=document.querySelector('#shopping-cart')
let cart=JSON.parse(localStorage.getItem("data") ) || []


let generateCartItems = () => {
    if (cart.length !== 0) {
      return (cartPage.innerHTML = cart
        .map((x) => {
          let { itemid, item } = x;
          let search = shopItemsData.find((x) => x.id == itemid) || [];
          return `
        <div class="cart-item">
          <img width="100" src=${search.img} alt="" />
          <div class="details">
          
            <div class="title-price-x">
              <h4 class="title-price">
                <p>${search.name}</p>
                <p class="cart-item-price">$ ${search.price}</p>
              </h4>
              <i onclick="removeItem(${search.id})" class="bi bi-x-lg"></i>
            </div>
            <div class="cart-buttons">
              <div class="buttons">
                <i onclick="countDec(${search.id})" class="bi bi-dash-lg"></i>
                <div id=${x.itemid} class="quantity">${x.item}</div>
                <i onclick="countInc(${search.id})" class="bi bi-plus-lg"></i>
              </div>
            </div>
            <h3>$ ${item * search.price}</h3>
          
          </div>
        </div>
        `;
        })
        .join(""));
    } else {
      cartPage.innerHTML = "";
      label.innerHTML = `
      <h2>Cart is Empty</h2>
      <a href="index.html">
        <button class="HomeBtn">Back to Home</button>
      </a>
      `;
    }
  };
  
  generateCartItems();
  
  function 
// dataLayer.push({
//   'event': 'pageview',
//   'url': window.location.href
// });

// function addToCart(product_name1, product_image1, product_price1, product_id1){
//     let product = { 'product_id': product_id1, 
//     'product_name': product_name1, 
//     'product_image':product_image1,
//     'product_price': product_price1}
//     console.log ("here" , product);
//     dataLayer.push({'event':'Add to cart',product});
//     }
// query selector for product name
var prodName = document.querySelector("h1.name").innerHTML;
	console.log(prodName);

//query selector for product price
	const parentElement = document.querySelector('.price-box');
const prodPrice = parentElement.querySelector('.price').innerHTML;
let newProdPrice = prodPrice.substring(1);
// prodPrice.innerHTML =newProdPrice;
console.log(newProdPrice);
// query selsector for  productId
const stockContainer = document.querySelector('.stock-container');
const stockId = stockContainer.querySelector('.value').textContent;
console.log(stockId); 
//query selector for  product category 
const ul = document.querySelector('div.breadcrumb-inner');
const secondListItem = ul.querySelectorAll('li')[2];
const clothingValue = secondListItem.textContent;
const indexOfSlash = clothingValue.indexOf("/");
const textAfterSlash1 = clothingValue.substring(indexOfSlash + 1);
const subcategory = textAfterSlash1.replace(/[0-9]/g, '');
const textBeforeSlash = clothingValue.substring(0, indexOfSlash);
console.log(subcategory);
//query selector for product sub category
if(prodName){
 ecommerce= {
  'products': {
    'name': prodName,
    'price': newProdPrice,
    'product_id' : stockId,
    'category': textBeforeSlash,
    'subcategory': subcategory,
    'pagetype':"product_page"
  }

}
}
console.log("adobe",  ecommerce.products.product_id);




function setDataLayerValues(productName, productPrice, productID, productCategory, subcategory) {
// //productName, productPrice, productID , productCategory
//   productName= document.querySelector("h1.name").innerHTML;
//   //to get price of the product from product page
//   const parentElement = document.querySelector('.price-box');
//   const prodPrice = parentElement.querySelector('.price').innerHTML;
//   let newProdPrice = prodPrice.substring(1);
//   // prodPrice.innerHTML =newProdPrice;

  // Set data layer variables
  dataLayer.push({
    'event': 'Product View',
    'ecommerce': {
        'products': [{
          'name': productName,
          'price': productPrice,
          'product_id' : productID,
          'category': productCategory,
          'subcategory': subcategory
        }]
      
    }
  });
}

window.onload = setDataLayerValues(prodName ,newProdPrice, stockId , textBeforeSlash, subcategory);




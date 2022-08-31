var productName = document.getElementById('prodname');
var productCategory = document.getElementById('prodcategory');
var productPrice = document.getElementById('prodprice');
var productDescription = document.getElementById('proddescr');
var productTable = document.getElementById('prodtbody');
var addUpDataBtn = document.getElementById('addUpBtn');
var updatePoduct = document.getElementById('updateBtn');
var searchBtn = document.getElementById(' prodsearch');
var indexProduct;
var productsList;


//  return data from localStorage
if (localStorage.getItem("storeOfProducts") == null) {
  productsList = [];
}
else {
  productsList = JSON.parse(localStorage.getItem("storeOfProducts"));
  retrieveProduct();
};

// Start( add product )
function addProduct() {
  if (checkInputs() == true) {
    var product = {
      productNameObj: productName.value,
      productCategoryObj: productCategory.value,
      productPriceObj: productPrice.value,
      productDescriptionObj: productDescription.value
    }
    productsList.push(product);
    localStorage.setItem("storeOfProducts", JSON.stringify(productsList));
    retrieveProduct();
    clearProduct();
  } else {
    window.alert("Complete Data Pleace...")
  };
};
// end( add product )
// Start(clear inputs after add or update product)
function clearProduct() {
  productName.value = "";
  productCategory.value = "";
  productPrice.value = "";
  productDescription.value = "";
};
// end(clear inputs after add or update product)
// Start(display product )
function retrieveProduct() {
  var addNewProduct = "" ;
  for (var i = 0; i < productsList.length; i++) {

    addNewProduct += ` <tr>
           <td>${i + 1}</td>
           <td>${productsList[i].productNameObj}</td>
           <td>${productsList[i].productCategoryObj}</td>
           <td>${productsList[i].productPriceObj}</td>
           <td>${productsList[i].productDescriptionObj}</td>
           <td><button class="btn btn-warning" onclick="updateProduct(${i});"><i class="far fa-edit mr-1"></i>Update</button></td>
           <td><button class="btn btn-danger" onclick="deleteProduct(${i});"><i class="far fa-trash-alt mr-1"></i>Delete</button></td>
           </tr>` 
  }
  productTable.innerHTML = addNewProduct;
};
// end(display product )
// Start(check if input empty or not)
function checkInputs() {
  if (productName.value != "" && productCategory.value != "" &&
    productPrice.value != "" && productDescription.value != "") {
    return true;
  } else {
    return false;
  }
};
// end(check if input empty or not)
// start( search product )
function searchProduct() {
  var addNewProduct = "";
  for (var i = 0; i < productsList.length; i++) {
    if (productsList[i].productNameObj.toLowerCase().includes(searchBtn.value.toLowerCase())) {
      addNewProduct += ` <tr>
         <td>${i + 1}</td>
         <td>${productsList[i].productNameObj.replace(searchBtn.value,`<span>${searchBtn.value}</span>`)}</td>
         <td>${productsList[i].productCategoryObj.replace(searchBtn.value,`<span>${searchBtn.value}</span>`)}</td>
         <td>${productsList[i].productPriceObj.replace(searchBtn.value,`<span>${searchBtn.value}</span>`)}</td>
         <td>${productsList[i].productDescriptionObj.replace(searchBtn.value,`<span>${searchBtn.value}</span>`)}</td>
         <td><button class="btn btn-warning" onclick="updateProduct(${i});"><i class="far fa-edit mr-1"></i>Update</button></td>
         <td><button class="btn btn-danger" onclick="deleteProduct(${i});"><i class="far fa-trash-alt mr-1"></i>Delete</button></td>
         </tr>`
    };
    searchBtn.style.color ='#ffc107';
  };
  productTable.innerHTML = `<span>${addNewProduct}</span>`;
};
// end( search product )
// start( update product )
function updateProduct(numOfProd) {
  indexProduct = numOfProd;
  productsList[numOfProd];
  productName.value = productsList[numOfProd].productNameObj;
  productCategory.value = productsList[numOfProd].productCategoryObj;
  productPrice.value = productsList[numOfProd].productPriceObj;
  productDescription.value = productsList[numOfProd].productDescriptionObj;

  updatePoduct.style.display = 'inline-block';
  addUpDataBtn.style.display = 'none';
};

function updateproductindex() {
  if (checkInputs() == true) {
    var product = {
      productNameObj: productName.value,
      productCategoryObj: productCategory.value,
      productPriceObj: productPrice.value,
      productDescriptionObj: productDescription.value
    };
    productsList.splice(indexProduct, 1, product);
    localStorage.setItem("storeOfProducts", JSON.stringify(productsList));
    retrieveProduct();
    clearProduct();
  } else {
    window.alert("Complete Data Pleace...");
  };
  updatePoduct.style.display = 'none';
  addUpDataBtn.style.display = 'inline-block';
};
// end( update product )
//start( delete product )
function deleteProduct(numOfProd) {
  productsList.splice(numOfProd, 1);
  localStorage.setItem("storeOfProducts", JSON.stringify(productsList));
  retrieveProduct();
};
// end( delete product )
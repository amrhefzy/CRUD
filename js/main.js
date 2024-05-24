
var ProductNameInput = document.getElementById("exampleInputproductName1");
var ProductpriceInput = document.getElementById("exampleInputproductPrice1");
var ProductProductInput = document.getElementById("exampleInputproductCategory1");
var ProductDecInput = document.getElementById("exampleInputproductDES1");
var searchInput = document.getElementById("searchBar")
var productNameValid = document.getElementById("productName");
var productPriceValid = document.getElementById("productPrice");
var productCategoryValid = document.getElementById("productCategory");
var productDecValid = document.getElementById("productDec");
var addBtn = document.getElementById("addBtn");
var updateMode = false;
var mainIndex ; 
var productArr=[];
if(JSON.parse(localStorage.getItem("product"))!= null)
  {productArr=JSON.parse(localStorage.getItem("product"))
  displayProduct();
  }
  



function addUpdateProduct(){
  var product = {
    name : ProductNameInput.value,
    price : ProductpriceInput.value,
    category : ProductProductInput.value,
    Dec : ProductDecInput.value
  }

  vaildationAlert()

  if(isProductDataValid()){
    if(!updateMode)
    {
      productArr.push(product);
    }
    else
    {
      
      productArr.splice(mainIndex,1,product);
      addBtn.innerHTML="Add product";
      updateMode= false; 
    }
    

    onDataChange()
    clearInput();
  }
}

function displayProduct(){

  var trAsign = "";

  for(var i=0; i<productArr.length; i++){
    trAsign += `
    <tr>
      <th scope="row">${i}</th>
      <td>${productArr[i].name}</td>
      <td>${productArr[i].price}</td>
      <td>${productArr[i].category}</td>
      <td>${productArr[i].Dec}</td>
      <td><button onclick= "updateItem(${i})" class="btn btn-outline-warning">update</button></td>
      <td><button onclick= "deleteItem(${i})" class="btn btn-outline-danger">Delete</button></td>
    </tr>
  `
  }
  document.getElementById("Tbody").innerHTML = (trAsign);
}


function clearInput(){
  ProductNameInput.value = "";
  ProductpriceInput.value = "";
  ProductProductInput.value = "";
  ProductDecInput.value = "";
}


function onDataChange()
{

  localStorage.setItem("product",JSON.stringify(productArr));
  displayProduct();
}

function deleteItem(index)
{
  productArr.splice(index,1)
  
  onDataChange()

}


function updateItem(index)
{
  updateMode = true;
  ProductNameInput.value = productArr[index].name;
  ProductpriceInput.value =  productArr[index].price;
  ProductProductInput.value =  productArr[index].category;
  ProductDecInput.value =  productArr[index].Dec;

  addBtn.innerHTML="Update Product" 
  mainIndex = index
}

function search(){
  var searchTerm = searchInput.value;
  var trAsign = "";
  for(i=0; i<productArr.length; i++)
  {
    if(productArr[i].name.toLowerCase().includes(searchTerm.toLowerCase()) )
    trAsign += `
      <tr>
        <th scope="row">${i}</th>
        <td>${productArr[i].name}</td>
        <td>${productArr[i].price}</td>
        <td>${productArr[i].category}</td>
        <td>${productArr[i].Dec}</td>
        <td><button onclick= "updateItem(${i})" class="btn btn-outline-warning">update</button></td>
        <td><button onclick= "deleteItem(${i})" class="btn btn-outline-danger">Delete</button></td>
      </tr>
    `
  }
  document.getElementById("Tbody").innerHTML=(trAsign);
}

function isProductDataValid()
{
  return (/^[A-Z][a-zA-Z]{1,18}$/.test(ProductNameInput.value)&&
  /^(?:[1-9]|[1-9]\d{1,4}|1\d{5}|200000)$/.test(ProductpriceInput.value)&&
  /^[a-zA-Z]{2,19}$/.test(ProductProductInput.value)&&
  /^.{2,199}$/.test(ProductDecInput.value))
}

function vaildationAlert(){
  if(/^[A-Z][a-zA-Z]{1,18}$/.test(ProductNameInput.value))
  {
    productNameValid.classList.add("d-none")
    ProductNameInput.classList.add("is-valid")
    ProductNameInput.classList.remove("is-invalid")
  }
  else
  {
    productNameValid.classList.remove("d-none")
    ProductNameInput.classList.add("is-invalid")
    ProductNameInput.classList.remove("is-valid")
    
  }
  if(/^(?:[1-9]|[1-9]\d{1,4}|1\d{5}|200000)$/.test(ProductpriceInput.value))
  {
    productPriceValid.classList.add("d-none")
    ProductpriceInput.classList.add("is-valid")
    ProductpriceInput.classList.remove("is-invalid")
  }
  else
  {
    productPriceValid.classList.remove("d-none")
    ProductpriceInput.classList.add("is-invalid")
    ProductpriceInput.classList.remove("is-valid")
    
  }
  if(/^[a-zA-Z]{2,19}$/.test(ProductProductInput.value))
  {
    productCategoryValid.classList.add("d-none")
    ProductProductInput.classList.add("is-valid")
    ProductProductInput.classList.remove("is-invalid")
  }
  else
  {
    productCategoryValid.classList.remove("d-none")
    ProductProductInput.classList.add("is-invalid")
    ProductProductInput.classList.remove("is-valid")
    
  }
  if(/^.{2,199}$/.test(ProductDecInput.value))
  {
    productDecValid.classList.add("d-none")
    ProductDecInput.classList.add("is-valid")
    ProductDecInput.classList.remove("is-invalid")
  }
  else
  {
    productDecValid.classList.remove("d-none")
    ProductDecInput.classList.add("is-invalid")
    ProductDecInput.classList.remove("is-valid")
    
  }
}
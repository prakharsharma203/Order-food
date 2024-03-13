let burger = document.querySelector('#burger');
let fries = document.querySelector('#fries');
let drink = document.querySelector('#drink');
let button = document.querySelector('#orderButton');
let id = document.querySelector('#order');
let image = document.querySelector('#image');
let order_id 

button.addEventListener('click', food);
 async function food() {
  if(!burger.checked && !fries.checked && !drink.checked){
      alert("Please select atleast one item");
  }button.disabled = true;   
   const response = await promise();
   button.disabled = false;
   if(burger.checked){
    image.src= "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    id.innerText = "Order ID : 52";
   }else if(fries.checked) {
    image.src = "https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    id.innerText ="Order ID: 63";
   }else if(drink.checked){
    image.src = "https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    id.innerHTML ="Order ID: 71";
   } 
}
function promise(){
    let promise = new Promise( (res,rej)=>{
        setTimeout(res,5000)
    })
    return promise;
}
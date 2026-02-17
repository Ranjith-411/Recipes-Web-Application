document.addEventListener("DOMContentLoaded",()=>{
    displaycart()
})

function displaycart(){
    let cartr=JSON.parse(localStorage.getItem("cartr"))
    
    let cartcontent=document.getElementById("cartcontent")
    let total_price=document.getElementById("total_price")
    console.log(cartr);
    console.log(cartcontent);
    console.log(total_price);

    if(cartr.length==0){
        cartcontent.innerHTML="your cart is empty.start shopping....."
         return;
    }
    
    cartr.map((recipes,i)=>{
        // totalbill+=Math.floor((recipes.Price)*90)
       if (!recipes) return;
        let newprod=document.createElement("div");
        newprod.setAttribute("class","prod_info");
        newprod.innerHTML=`
        <main>
        <div id="img">
               <img src="${recipes.image}"/>
                <div id="item" >
                    <h1 id="title">${recipes.name}</h1>
                    <p id="description"><b>caloriesPerServing</b> : ${recipes.caloriesPerServing} </p>
                    <P id="description"><b>cuisine : ${ recipes.cuisine}</P>
                    <p id="description"><b>prepTimeMinutes</b>  : ${(recipes.prepTimeMinutes) }</p>
            
                    <p id="description"><b>cookTimeMinutes</b>  : ${(recipes.cookTimeMinutes) }</p>           
                
                </div> 
                <button onclick="removefromcart(${i})" id="remove">remove</button>
        </div>
        </main>`
        cartcontent.append(newprod)  
    })  
    //  totalPrice.innerHTML= `<h2>Total Price:</h2>`
}
function removefromcart(index){
    let cartr=JSON.parse(localStorage.getItem("cartr"))
    cartr.splice(index,1)
    localStorage.setItem("cartr",JSON.stringify(cartr))
    displaycart()
}
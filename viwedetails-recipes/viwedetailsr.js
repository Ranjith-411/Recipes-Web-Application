document.addEventListener("DOMContentLoaded",()=>{
    let recipesdetails=document.getElementById("recipesdetails");
    let allrecipess=JSON.parse(localStorage.getItem("allrecipes"))
    // console.log(productdetails);
    
    console.log(allrecipess);
    let recipesid=localStorage.getItem("recipesid")
    console.log(recipesid);
    



    if(allrecipess && recipesid ){
        let selectedrecipes=allrecipess.find((v)=>{
            return v.id ==recipesid
        })
         if(selectedrecipes){
            recipesdetails.innerHTML=`
            <main>
            <div>
                    <img src="${selectedrecipes.image}"/>
            </div>

            <div id="content">
                    <h2 id="title">${ selectedrecipes.name}</h2>
                    <P id="caloriesPerServing"><b>caloriesPerServing 🔥 : </b>${ selectedrecipes.caloriesPerServing}</P>
                    <h1 id="cuisine">cuisine : ${ selectedrecipes.cuisine}</h1>
                    <h4 id="p"><b>prepTimeMinutes</b>  : ${(selectedrecipes.prepTimeMinutes) }</h4>
                    <h4 id="c"><b>cookTimeMinutes</b>  : ${(selectedrecipes.cookTimeMinutes) }</h4>
                        <button  id="add">Add to Cart</button>  
                        <button id="back"> Back to Home</button> 
                    
            </div>
            

           
           
            
        
            


        </main>

            `
            document.getElementById("back").addEventListener("click",()=>{
            window.location.href="../RECIPES/HOME.HTML";
        })


        document.getElementById("add").addEventListener("click",()=>{
            addtocart(selectedrecipes)
        })
         }else{
            recipesdetails.innerHTML=`<h1>prodct not found</h1>`

         }
        
    }else{
        recipesdetails.innerHTML=`<h1>product not found</h1>`
    }
    
})


function addtocart(recipes){
    let cartr=JSON.parse(localStorage.getItem("cartr")) || [];
    cartr.push(recipes)
    localStorage.setItem("cartr",JSON.stringify(cartr))
    alert("recipe added successfully")
}


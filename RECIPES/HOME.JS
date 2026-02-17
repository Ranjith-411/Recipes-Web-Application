let recipes=[];


function fetchData(){
    fetch("https://dummyjson.com/recipe").then((res)=>{
        return res.json();
    }).then((val)=>{
        console.log(val.recipes);
        recipes=val.recipes
        localStorage.setItem("allrecipes",JSON.stringify(recipes))
        displayrecipes(recipes)
    })
}

function displayrecipes(recipe){
       let output=""
    recipe.map((v)=>{
        output +=`
        <main>
            <img src="${v.image}"/>
            <h1>🍽️${v.name}</h1>
        <div id="content">
            
            <h4 >⭐ rating ${v.rating} </h4>
        
            
            <h4>🕛 ${v.mealType}</h4>
           
            
        </div> 
        <div id="button">
            <button ><a href="">add to cart</a></a></button>  
            <button onclick="details('${v.id}')"> <a>viwe details</a> </button> 
        </div> 

        

        </main>
        `;
        
      
    })
document.getElementById("root").innerHTML=output;
       
}
fetchData()

document.getElementById("searchbar").addEventListener("input",function searchterm(event){
    let searchterm=event.target.value.toLowerCase();
    let fillterrecipes=recipes.filter((v)=>{
        
        return (
            v.name.toLowerCase().includes(searchterm) 
    );
    
    
    });
   displayrecipes(fillterrecipes);
});


function details(recipesid){
    console.log(recipesid);
    localStorage.setItem("recipesid",recipesid);
    window.location.href="../viwedetails-recipes/viwedetailsr.html"
    
}
    



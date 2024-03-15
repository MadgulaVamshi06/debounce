
// script.js

let input = document.getElementById("searchInput");
 input.addEventListener("input",()=>{
  throttling (fetchData, 1000);
 })

async function fetchData() {
   
  const searchInput = document.getElementById("searchInput").value;
  const Url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
  try {
    const response = await fetch(Url);
    const data = await response.json();
    console.log(data);

    displayRecipeInfo(data);
  
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

function displayRecipeInfo(data) {
    
  console.log("display",data)
  
  const recipeInfo = document.getElementById("recipeInfo");
  recipeInfo.innerHTML = ""
  data.meals.forEach((ele) => {
    let div = document.createElement("div")
    let p_title = document.createElement("h4")
    let p_instructions = document.createElement("p")
    let a = document.createElement("a");
    let img = document.createElement("img");

 
    p_title.innerText = `Title : ${ele.strMeal}`
    p_instructions.innerText = `Instructions : ${ele.strInstructions}`
    a.href = `${ele.strYoutube}`; 
    a.innerText = `Link : ${ele.strYoutube}`;
    img.src = ele.strMealThumb
   
    div.append(img,p_title,p_instructions,a)
    recipeInfo.append(div)
    
  });
}

let flag = false;//timer is not running

function throttling(fun,delay){
    if(flag==true){
        //if timer is running i will simply return or do nothing
        return;
    }
    fun()
    
    flag =true;//timer is starting
    setTimeout(function(){
        flag =false;
        //timer is end
    },delay)

}


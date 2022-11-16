// function helloworld(str){
//     console.log(`Greetings ${str}`);
// }

// const helloworld = ((str,time ="day") => {console.log(`Good ${time} ${str}`)});

// helloworld("yay", );

// let enter = prompt("Enter a radius: ");

// function circleArea(radius)
// {
//   const radiusP = document.querySelector("#radius");
//   const resultP = document.querySelector("#result");
//   area = Math.PI *radius**2
//   radiusP.textContent = radius;
//   resultP.textContent = area.toFixed(2);

//     return Math.PI *radius**2
// };
const shopList = document.querySelector(".shopping")
// let items = prompt("Enter grocery list.")
let items = ["bananas", "weed", "sprite", "green tea"]

function shop(list){
    for(i=0; i<list.length; i++){
        let newLi = document.createElement("li");
        newLi.textContent = list[i];
        shopList.append(newLi);
        console.log(list[i]);
    }
};

function toSquare (){
    shopList.classList.toggle("circleList");
    shopList.classList.add("squareList");
}

function green(list){
    const arrLi = document.querySelectorAll(".shopping li");
    arrLi.forEach((item) => {
        if (item.textContent.includes("green" || "sprite")){
            item.style.color= "green";
        }
    });
}

shop(items);
toSquare();
green(shopList);
// rad = circleArea(enter).toFixed(2);
// alert("The area: " + rad);
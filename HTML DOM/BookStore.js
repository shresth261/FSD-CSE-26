const bookdata = [
    { image: "", price: 465.58 }, 
    { image: "", price: 465.58 },
    { image: "", price: 465.58 }
];
function book(data){

const div = document.createElement("div");
div.setAttribute("class","book");
const image = document.createElement("img");
image.setAttribute("src","");
image.setAttribute("height","100px");
image.setAttribute("width","100px");
const heading = document.createElement("h2");
heading.innerText= "Price:" + data.price;
const bt = document.createElement("button");
bt.innerText= "Add to Cart";
div.appendChild(image);
div.appendChild(heading);
div.appendChild(bt);
return div;
}
const bookstore=bookdata.map((i)=>(
    Book(i)
))
const parent = document.getElementById("root");
for(b of bookstore){
parent.appendChild(b);
}


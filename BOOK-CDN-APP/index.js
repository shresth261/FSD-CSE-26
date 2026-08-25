// COMPLETE BOOK store
function Book(props) {
    const image = React.createElement("img", 
        { src: props.image, width: 100, height: 100 }, null);
    const title= React.createElement("h2", 
        {style: { color: "red" }}, "Title:"+props.title)
    const price = React.createElement("h2",
        {style: { color: "green" }}, "Price:"+props.price)
    const btn = React.createElement("h2",
        {style: { color: "blue" }}, "Add To Cart")
        
    const div=React.createElement("div",
        {className: "book"}, [image, title, price, btn])    
        
    return div;
}

const bookdata= [
    {image: "", title: "React", price: "234"},
    {image: "", title: "maths", price: "432"},
    {image: "", title: "Enflis", price: "534"}
    
]
function App(){
  const bookstore= bookdata.map((b)=>{
       return Book(b)

    })
    const div= React.createElement("div",
        {className:"bookstore"}, [...bookstore])
}
    return div;

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(App())
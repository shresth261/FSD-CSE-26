import "./Items.css"
import image from "../assets/react.svg"
const Items = ({props}) => {
  return (
    <div className="card">
      <img src={image} width={100} height={100} alt="Item Image"/>
      <h2>Title: {props.title}</h2>
      <h3>Price: ₹{props.price}/-</h3>
      <button className="btn">AddToCart</button>
    </div>
  )
}

export default Items
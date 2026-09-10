const Items = ({ image, name, description, price }) => {
  return (
    <div className="items">
      <img src={image} width="200" height="200" alt={name} />

      <h3>{name}</h3>

      <p>{description}</p>

      <p>Price: ${price}</p>

      <button>Add to Cart</button>
    </div>
  );
};

export default Items;
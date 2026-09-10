import Items from "./Items";

const Home = () => {
  return (
    <div className="home">
      
      <div className="items-container">

        <Items
          image="https://via.placeholder.com/200"
          name="T-Shirt"
          description="Cotton T-Shirt"
          price="20"
        />

        <Items
          image="https://via.placeholder.com/200"
          name="Shoes"
          description="Running Shoes"
          price="50"
        />

        <Items
          image="https://via.placeholder.com/200"
          name="Watch"
          description="Stylish Watch"
          price="35"
        />

        <Items
          image="https://via.placeholder.com/200"
          name="Bag"
          description="College Backpack"
          price="40"
        />

      </div>

    </div>
  );
};

export default Home;
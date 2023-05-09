
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from './card';
import CardItem from './carditem';
import { useState } from "react";
import Navbar from './Navabar';

function App() {

  const products = [
    {
      id: 1,
      title: "shwarama",
      price: 100,
      pic:"https://takrecipe.com/wp-content/uploads/2022/08/chicken-shawarma-recipe.jpg"
    },
    {
      id: 2,
      title: "dosa",
      price: 30,
      pic:"https://thumbs.dreamstime.com/b/masala-dosa-21646814.jpg"
    },
    {
      id: 3,
      title: "idly",
      price: 60,
      pic:"https://t3.ftcdn.net/jpg/03/62/02/26/360_F_362022640_fZ6UM0JycJlFDdBiR1pYlNddKfdGvYwR.jpg"
    },
    {
      id: 4,
      title: "idly special",
      price: 90,
      pic:"https://t3.ftcdn.net/jpg/03/62/02/26/360_F_362022640_fZ6UM0JycJlFDdBiR1pYlNddKfdGvYwR.jpg"
    },
  ];

  const [cartitems, setCartItem] = useState([]);
  const [total, setTotal] = useState(0)

  let handleAddToCart = (id) => {
    const productIndex = products.findIndex(obj => obj.id === id)
    const product = products[productIndex]

    setCartItem([...cartitems, product])
    setTotal(total + product.price)
  };

  let handleRemoveCart = (id) => {
    const cartItemIndex = cartitems.findIndex(obj => obj.id === id);
    setTotal(total - cartitems[cartItemIndex].price);
    cartitems.splice(cartItemIndex, 1)
    setCartItem([...cartitems]);

  }
  return (
    <div className="container">
      <div className='row'>
        <div className='col-lg-8'>
          <div className='row'>
            <div className='col-lg-10'>
              <Navbar></Navbar>
            </div>
          </div>
          <div className='row'>

            {
              products.map((product) => {
                return <Card cartitems={cartitems} data={product} handleAddToCart={handleAddToCart}></Card>
              })
            }

          </div>
        </div>
        <div className='col-lg-4'>
          <div className='row'>
            <div className='col-lg-8'>
              <h3>Card's</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <ol class="list-group list-group-numbered">

                {
                  cartitems.map((item) => {
                    return <CardItem data={item} handleRemoveCart={handleRemoveCart}></CardItem>
                  })
                }
              </ol>
            </div>
            <div className='col-lg-12'>
              <h1>Total : Rs. {total}</h1>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
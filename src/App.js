import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "./styles/styles.scss";
import { ProductList } from "./Components/ProductList/ProductList";
import { FetchLoader } from "./FetchLoader/FetchLoader";
import { ShoppingBasket } from "./Components/ShoppingBasket/ShoppingBasket";

function App() {
  // Todo  replace api and cors fix @  https://static.originbroadband.com/resources/fe-test-i20UnrYW9O.json

  const baseURL =
    "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=9";
  const [postProducts, setPost] = useState(null);
  let itemSKUPrice = 199;
  const [procuctPrice, setProcuctPrice] = useState(itemSKUPrice);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.table(response.data);
    });
  }, []); // only fires once

  // if (!post) return null;

  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemoveFromCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x)  => x.id !== product.id ));

    } else { 
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
       
    }
  }


  return (
    <div className="App">
      <header>

        <img src="https://www.originbroadband.com/images/logo.svg" width="100%" alt="logo"  className="image__brand"/>
        <h1>shopping cart mini tech test</h1>
      </header>

      <main className="App-header  ">
        <section className="flex__parent">
          <div className="flex__primary">
      
            {
              postProducts ? (
                <ProductList
                  postProducts={postProducts} procuctPrice={procuctPrice}
                  onAddToCart={onAddToCart}
                />
              ) : (
                <FetchLoader />
              )
              //loads product list, or waits for product list
            }
          </div>

          <aside className="flex__secondary flex__secondary">
             
            <ShoppingBasket cartItems={cartItems} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} procuctPrice={procuctPrice} />
          </aside>
        </section>
      </main>
    </div>
  );
}

export default App;

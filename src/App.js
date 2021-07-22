import React, {useState} from 'react';
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Banner from './components/Banner';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductsBuy from './components/ProductsBuy';
import NewsLetter from './components/NewsLetter';
import FooterContent from './components/FooterContent';


function App() {

  const [cart, setCart] = useState(
    Number(sessionStorage.getItem("purchase")) || 0
  );

  return (
    <>
       <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Header  purchase={cart} />}
          />
        </Switch>
      </Router>

      <Banner />

      <ProductsBuy  titleProducts={"Mais vendidos"} productPurchase={setCart}/>

      <NewsLetter />

      <FooterContent />
 

    

    </>
  );
}

export default App;

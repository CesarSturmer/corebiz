import React, {useState} from 'react';
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Banner from './components/Banner';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {

  const [cart, setCart] = useState(
    Number(localStorage.getItem("purchase")) || 0
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

 

    

    </>
  );
}

export default App;

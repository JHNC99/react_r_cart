import React,{useEffect} from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import {calculateTotal} from './store/slices/cart'
import { useDispatch,useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);
  useEffect(() => {
    dispatch(calculateTotal());
  }
  , [cartItems]);

  return <main>
    <Navbar />
    <CartContainer />
  </main>
}
export default App;

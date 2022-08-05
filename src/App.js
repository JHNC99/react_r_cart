import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { calculateTotal, getCartItems } from './store/slices/cart'
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector(state => state.cart);
  const { isOpen } = useSelector(state => state.modal);

  useEffect(() => {
    dispatch(calculateTotal());
  }
    , [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }
    , []);

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  return <main>
    {isOpen && <Modal />}
    <Navbar />
    <CartContainer />
  </main>
}
export default App;

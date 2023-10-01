import Navbar from "../components/Navbar"
import { useSelector } from "react-redux"

const Cart = () => {

  const productCart = useSelector(state => state.cart)
  console.log('Cart:', productCart)

  return (
    <>
      <Navbar />
      {JSON.stringify(productCart)}
      cart cart
    </>
  )
}

export default Cart

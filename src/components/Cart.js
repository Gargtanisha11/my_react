import { clearCart } from "../utilis/redux/cartSlice";
import CartItemList from "./CartItemList";
import {useDispatch, useSelector} from "react-redux"
const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);
  
  const dispatch=useDispatch();

  const handleClearCart=()=>{
    dispatch(clearCart());

  }

  return (
    <div className=" text-center  py-3 mx-60">
      <div className=" justify-between bg-slate-50 shadow-xl m-8 p-2 ">
        <h1 className="font-semibold text-xl py-3">This is Your Cart</h1>
        <button className="rounded-lg p-2 m-2 bg-black text-white" onClick={handleClearCart}>Clear Cart</button>
      </div>
      <div>
        {cartItems.map((items)=>(
          <CartItemList key={items.card.info.id}itemCards={items}/>
        ))}
      </div>
    </div>
  );
};
export default Cart;

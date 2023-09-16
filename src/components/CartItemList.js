import { useDispatch } from "react-redux";
import { CDN_URL } from "../utilis/constant";
import { addItem, removeItem } from "../utilis/redux/cartSlice";

const CartItemList = ({ itemCards }) => {
  const dispatch = useDispatch();

  const handleRemoveItem=()=>{
    dispatch(removeItem(itemCards.card.info.id))
    
  }

  return (
    <div className="border border-b-2 border-t-0 border-r-0 border-l-0 text-left flex justify-between my-10 pb-5 ">
      <ul className="w-9/12">
        <li className=" font-medium text-lg py-2">
          {itemCards.card.info.name}
        </li>
        <li className=" font-medium text-base py-1">
          Rs.
          {itemCards.card.info.price
            ? itemCards.card.info.price / 100
            : itemCards.card.info.defaultPrice / 100}
        </li>
        <li className="text-sm">{itemCards.card.info.description}</li>
      </ul>
      <div className="w-3/12 pl-16 relative ">
        <img
          className=" rounded-md h-28"
          src={CDN_URL + itemCards.card.info.imageId}
          alt=""
        />
        <button className="absolute z-10 ml-5 mb-0 -bottom-4 py-2 rounded-lg w-20 text-green-700 bg-white border border-slate-300  " onClick={handleRemoveItem}>
        
        REMOVE-
      </button>
      </div>
    </div>
  );
};
export default CartItemList;

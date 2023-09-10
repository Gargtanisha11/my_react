import { CDN_URL } from "../utilis/constant";

const ItemList = ({ itemCards }) => {
  return (
    <div className="border border-b-2 border-t-0 border-r-0 border-l-0 text-left flex justify-between my-10">
      <ul className="w-9/12">
        <li className=" font-medium text-lg py-2">{itemCards.card.info.name}</li>
        <li className=" font-medium text-base py-1">Rs.{itemCards.card.info.price / 100}</li>
        <li className="text-sm">{itemCards.card.info.description}</li>
      </ul>
      <div className="w-3/12 px-2  ">
      <button className="absolute z-10 ml-5 py-2 rounded-lg w-20   text-green-700  bg-white border border-slate-300 hover: focus-visible: shadow-slate-400"> ADD+</button>  
        <img  className=" rounded-md h-28"src={CDN_URL + itemCards.card.info.imageId} alt="" />
        
        
      </div>
    </div>
  );
};
export default ItemList;

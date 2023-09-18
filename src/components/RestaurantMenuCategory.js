import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import NestedItemList from "./NestedItemList";

const RestaurantMenuCategory = ({ itemscategory ,showItem,setShowIndex,funct}) => {
 
  // const [showItem, setShowItem] = useState(false);
  const [btn, setBtn] = useState("🔽");
  const[nestedShowIndex,setNestedShowIndex]= useState(null);
  const handleClick = () => {
    
    if(showItem===false){
      setShowIndex();
      setBtn("🔼");
    }
    else{
      funct();
      setBtn("🔽");
    }
      // setShowIndex();
    // btn === "🔽" ? setBtn("🔼") : setBtn("🔽");
  };
 const nestedFunct= ()=>{
   setNestedShowIndex(null);
 }
 useEffect(()=>{
   showItem === true ? setBtn("🔼") :setBtn("🔽");
 })


  return (
    <div className="  bg-slate-50 shadow-xl m-8 p-2">
      <div  data-testid="menu-card"className="flex justify-between" onClick={handleClick}>
        <h1 className="font-semibold text-xl py-3">
          {itemscategory.card.card.title}
        </h1>
        <h1 className=" hover:cursor-pointer mt-4">{btn}</h1>
      </div>
      {/* for type itemCategory*/}
      {itemscategory?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ? showItem && (
            <div>
              {itemscategory.card.card.itemCards.map((items) => (
                <ItemList key={items.card.info.id} itemCards={items}  />
              ))}
            </div>
          )
        : showItem && (
            <div>
              {itemscategory?.card?.card?.categories.map(
                (nestedItemCategory,index) => (
                  <NestedItemList
                    key={nestedItemCategory.title}
                    nestedItemCards={nestedItemCategory}
                    nestedShowItem={index===nestedShowIndex && true}
                    setNestedShowIndex={()=>setNestedShowIndex(index)}
                    nestedFunct={nestedFunct}
                  
                  />
                )
              )}
            </div>
          )}
    </div>
  );
};
export default RestaurantMenuCategory;

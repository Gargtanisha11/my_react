import { useState } from "react";
import ItemList from "./ItemList";
import NestedItemList from "./NestedItemList";

const RestaurantMenuCategory = ({ itemscategory }) => {
  console.log(itemscategory);
  const [showItem, setShowItem] = useState(false);
  const [btn, setBtn] = useState("🔽");
  const handleClick = () => {
    setShowItem(!showItem);
    btn === "🔽" ? setBtn("🔼") : setBtn("🔽");
  };

  return (
    <div className="  bg-slate-50 shadow-xl m-8 p-2">
      <div className="flex justify-between" onClick={handleClick}>
        <h1 className="font-semibold text-xl py-3">
          {itemscategory.card.card.title}
        </h1>
        <h1 className=" hover:cursor-pointer">{btn}</h1>
      </div>
      {/* for type itemCategory*/}
      {itemscategory?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ? showItem && (
            <div>
              {itemscategory.card.card.itemCards.map((items) => (
                <ItemList key={items.card.info.id} itemCards={items} />
              ))}
            </div>
          )
        : showItem && (
            <div>
              {itemscategory?.card?.card?.categories.map(
                (nestedItemCategory) => (
                  <NestedItemList
                    key={nestedItemCategory.title}
                    nestedItemCards={nestedItemCategory}
                  />
                )
              )}
            </div>
          )}
    </div>
  );
};
export default RestaurantMenuCategory;

 import { useState } from "react";
 import ItemList from "./ItemList";
const NestedItemList = (nestedItemCards) => {
  const { title } = nestedItemCards?.nestedItemCards;
  const [showItem, setShowItem] = useState(false);
  const [btn, setBtn] = useState("🔽");
  const handleClick = () => {
    setShowItem(!showItem);
    btn === "🔽" ? setBtn("🔼") : setBtn("🔽");
  };
  return (
    <div>
      <div className="border border-b-2 border-t-0 border-r-0 border-l-0 text-left flex justify-between mt-4" onClick={handleClick}>
        <h1 className=" text-lg py-3">{title}</h1>
        <h1 className=" hover:cursor-pointer mt-4">{btn}</h1>
      </div>
      {
         showItem && (
            <div>
              {nestedItemCards?.nestedItemCards?.itemCards.map((items) => (
                <ItemList key={items.card.info.id} itemCards={items} />
              ))}
            </div>
          )
      }
    </div>
  );
};
export default NestedItemList;

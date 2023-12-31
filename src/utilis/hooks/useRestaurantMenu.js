
import { useEffect,useState } from "react";
import { MENU_API } from "../constant";

const useRestaurantMenu =(resId)=>{
    const [resItem, setResItem] = useState(null);
    useEffect(() => {
        fetchMenu();
      }, [resItem]);
      const fetchMenu = async () => {
       
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
      
        setResItem(json?.data);
      };
    return resItem;

};
export default useRestaurantMenu;
import { Storage } from "../../Storage/Storage";

const handleIncreaseCartCount = (setCount, count, item, price, setCartTotal) =>{
        setCount(count + 1)
        const storageItems = Storage("shopping-cart")
        const getItemId = storageItems.find(storageItem => storageItem.id === item.id)
        getItemId.quantity = getItemId.quantity + 1;
        getItemId.price = price * getItemId.quantity;
        localStorage.setItem("shopping-cart", JSON.stringify(storageItems))
        setCartTotal(cartTotalMoney())
        
};


const handleDecreaseCartCount = (setCount, count, item, price, setCartTotal) =>{
    if(count > 1){
        setCount(count - 1)
      
    }
    const storageItems = Storage("shopping-cart")
    const getItemId = storageItems.find(storageItem => storageItem.id === item.id)
    if( getItemId.quantity > 1 ){
        getItemId.quantity = getItemId.quantity - 1;
        getItemId.price = getItemId.price - price;
        localStorage.setItem("shopping-cart", JSON.stringify(storageItems))
        setCartTotal(cartTotalMoney())
    }
   
};


const showQuantity = (id) =>{
    const getItemId = Storage("shopping-cart").find(storageItem => storageItem.id === id)
    return getItemId.quantity;
}



const cartTotalMoney = () =>{
    const totalMoney = Storage("shopping-cart").reduce((acc, item)=> item.price + acc, 0)
    return totalMoney;
}



export { handleDecreaseCartCount as DecreaseCount, handleIncreaseCartCount as IncreaseCount, showQuantity, cartTotalMoney as TotalMoney };


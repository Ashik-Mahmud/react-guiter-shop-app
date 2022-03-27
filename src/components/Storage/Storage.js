const getItemFromStorage = (key) =>{
    const getItems = localStorage.getItem(key)
    let usersInfo = [];

    if(getItems){
        usersInfo = JSON.parse(getItems)
    }
    return usersInfo;
}

export { getItemFromStorage as Storage };


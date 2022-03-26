const getItemFromStorage = () =>{
    const getItems = localStorage.getItem("user-info")
    let usersInfo = [];

    if(getItems){
        usersInfo = JSON.parse(getItems)
    }
    return usersInfo;
}

export { getItemFromStorage as Storage };


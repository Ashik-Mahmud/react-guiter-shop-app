import { Storage } from "../Storage/Storage";
const handleSignInWithFirebase = (response , setIsLoggedIn) =>{
    
    if(response){
        
       const {email, displayName, photoURL} = response.user;
       const items = Storage("user-info");
       const id = Math.round(Math.random() * 10000);

      const isHas = items.find(item => item.email === email);
      if(isHas){
        sessionStorage.setItem("user", email ? email : displayName)
        setIsLoggedIn(true)
      }else{
        setIsLoggedIn(true)
        items.push({
            id,
            name: displayName,
            email: email ? email : displayName,
            username: email ? email : displayName,
            password: null,
            avatar: photoURL,
          });
           
            localStorage.setItem('user-info', JSON.stringify(items))
            sessionStorage.setItem("user",  email ? email : displayName)
       
      }


     
        
    }
}

export { handleSignInWithFirebase as firebaseSignIn };


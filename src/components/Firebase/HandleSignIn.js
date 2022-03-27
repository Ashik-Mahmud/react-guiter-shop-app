import { Storage } from "../Storage/Storage";
const handleSignInWithFirebase = (response , setIsLoggedIn) =>{
    
    if(response){
        
       const {email, displayName, photoURL} = response.user;
       const items = Storage();
       const id = Math.round(Math.random() * 10000);

      const isHas = items.find(item => item.email === email);
      if(isHas){
        sessionStorage.setItem("user", email)
        setIsLoggedIn(true)
      }else{
        setIsLoggedIn(true)
        items.push({
            id,
            name: displayName,
            email,
            username: email,
            password: null,
            avatar: photoURL,
          });
           
            localStorage.setItem('user-info', JSON.stringify(items))
            sessionStorage.setItem("user", email)
            sessionStorage.setItem("user", email)
       
      }


     
        
    }
}

export { handleSignInWithFirebase as firebaseSignIn };


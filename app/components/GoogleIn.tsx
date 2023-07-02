'use client';
import { GoogleAuthProvider, signInWithPopup, getAdditionalUserInfo } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
const GoogleIn = () => {
    const googleHandler = async() => {
        try {
            const provider = new GoogleAuthProvider();
            const googleRes = await signInWithPopup(auth,provider);
            if(googleRes){
                const newUser = getAdditionalUserInfo(googleRes);
                if(newUser !== null && newUser.isNewUser){
                    // IS NEW USER
                    if(googleRes.user.email !== null){
                        // Do a POST SIGN UP Func here
                        console.log(`IS NEW USER`);
                  
                        return;
                    }else{
                        throw new Error('🚦Google Result Error. Email is null. 🚦') 
                    }
                }else{
                    // NOT NEW USER
                    if(googleRes.user.email !== null){
                        // Do a POST LOGIN FUNCTION HERE
                        console.log(`IS OLD USER`);


                 
                
                     
                
                   
                    }else{
                        throw new Error('🚦Google Result Error. Email is null. 🚦')
                    }
                }
            }
        } catch (er) {
            console.log(`Error is: ${er}`)
            alert(er);
            return;
        }
    }
    return (
        <div>
            <button type="button" onClick={() => googleHandler()}>GOOGLE SIGN IN</button>
        </div>
    )
}
export default GoogleIn;
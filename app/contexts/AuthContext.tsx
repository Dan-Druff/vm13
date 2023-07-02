'use client';
import React, {useContext, useState, useEffect, ReactNode} from "react";
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/firebaseConfig";
export interface UserData {
    userId:string,
    userName:string,
    userEmail:string,
    userPhotoLink:string | null,
    userProviderId:string
}
interface AType {
    currentUser:User | null,
    userData:UserData | null
}
export const AuthContext = React.createContext<AType>({currentUser:null,userData:null});

export function useAuth(){
    return useContext(AuthContext);
}
export const AuthProvider = ({children}:{children:ReactNode}) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading,setLoading] = useState<boolean>(true);
    const [userData,setUserData] = useState<UserData | null>(null);
    const Router = useRouter();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if(user){
                const reqdData : UserData = {
                    userProviderId:user.providerData[0].providerId,
                    userId:user.uid,
                    userName:typeof user.displayName === 'string' ? user.displayName : 'Invalid Name',
                    userEmail:typeof user.email === 'string' ? user.email : 'Invalid Email',
                    userPhotoLink:user.photoURL
                    }
                setUserData(reqdData);
                setCurrentUser(user);
                Router.push('/dashboard');

            }else{
                setCurrentUser(null);
                setUserData(null);
                setLoading(false);
                Router.push('/');

            }
            setLoading(false);
        })
    
      return unsubscribe;
    }, [])

    let authValue = {
        currentUser:currentUser,
        userData:userData
    }
    // if(loading){
    //     return (
    //         <div><h2>LOADING...</h2></div>
    //     )
    // }
    return (
        <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
    )
}
import { ReturnType } from "@/utils/constants";
import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
const postLogin = async() => {

}
const postSignup = async() => {
    
}

export const firebaseSignout = async():Promise<ReturnType> => {
    try {
        await signOut(auth);
        return {
            status:true,
            body:'Signed Out Succesfully'
        }
    } catch (e) {
        console.log(`Error; Signing out`);
        return {
            status:false,
            body:`Error; Signing out: ${e}`
        }
    }
}
export const firebaseSignup = async(email:string, password:string, username:string):Promise <ReturnType> => {
       
    try {
        let result = await createUserWithEmailAndPassword(auth,email,password); 
        return {status:true,body:result};
        
    } catch (e) {
        console.log(`Error signing Up: ${e}`);

        return {
            status:false,
            body:new Error(`🚦Error Signing Up => ${e}🚦`)
        };
    }
}
export const firebaseLogin = async(email:string, password:string):Promise <ReturnType> => {
       
    try {
        let result = await signInWithEmailAndPassword(auth,email,password); 
        return {status:true,body:result};
        
    } catch (e) {
        console.log(`Error Logging In: ${e}`);

        return {
            status:false,
            body:new Error(`🚦Error Logging In => ${e}🚦`)
        };
    }
}
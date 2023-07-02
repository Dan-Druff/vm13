'use client';
import { firebaseSignout } from "@/firebase/firebaseOps";

const SubHead = async() => {

    const handleLogout = async() => {
        try {
            const signoutRes = await firebaseSignout();
            if(signoutRes){
                console.log(signoutRes.body);
               
            }else{
                throw new Error(`Error Signing Out??`);
            }
        } catch (error) {
            alert(error);
        }
    }
  return (
    <div className='header'>
        <div className='container'>
            <div className='logo'>
             <button onClick={() => handleLogout()}>Logout</button>
            </div>
          
        </div>
    </div>
    
  )
}

export default SubHead
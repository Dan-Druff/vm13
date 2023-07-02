'use client';
import { firebaseSignout } from "@/firebase/firebaseOps";
import { useRouter } from "next/navigation";
const SubHead = async() => {
    const Router = useRouter();
    const handleLogout = async() => {
        try {
            const signoutRes = await firebaseSignout();
            if(signoutRes){
                console.log(signoutRes.body);
               Router.push('/');
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
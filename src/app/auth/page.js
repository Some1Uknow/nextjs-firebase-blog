"use client"

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";


export default function Authenticate(){
    
    const provider = new GoogleAuthProvider();
    const router = useRouter();
    
    const googleHanlerAuth = () => {
        signInWithPopup(auth, provider)
      .then((result) => {
       
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
       
        const user = result.user;

        router.push("/homePage")
        
      }).catch((error) => {
      
        const errorCode = error.code;
        const errorMessage = error.message;
      
        const email = error.customData.email;
       
        const credential = GoogleAuthProvider.credentialFromError(error);
   
      });
    }

    return (
        <div className="min-h-screen w-full p-3 flex justify-center items-center">
            <button className="bg-neutral-950 text-neutral-300 rounded-xl p-3" onClick={googleHanlerAuth}>Sign in with Google</button>
        </div>
    )
}

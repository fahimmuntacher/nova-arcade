import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase_init";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unSubscribe();
    }, []);

    const logOut = (navigate) => {
        signOut(auth).then(() => {
            setUser(null);
            navigate("/")
            toast.info("Logout Successfull")
        }).catch(e => {
            toast.warning(e.code)
        })
    }

    const authInfo = {
        user, 
        setUser, 
        logOut
    };

    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;


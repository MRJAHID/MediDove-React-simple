import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../pages/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsloading] = useState(true);

    const auth = getAuth();

    // Goggle Auth
    const signinUsingGoogle = () => {
        setIsloading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsloading(false);
            });
    };

    // register new with emaiil
    const registation = (email, password, name) => {
        setIsloading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                console.log(result.user);
            })
            .catch((error) => {
                setError(error.messsage);
            });
    };

    // Observe user state changed
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsloading(false);
        });
        return () => unsubscribe;
    }, []);

    //   login
    const handleLogin = (email, password) => {
        setIsloading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                console.log(result.user);
            })
            .finally(() => setIsloading(false));
    };

    // Logout
    const logout = () => {
        setIsloading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsloading(false));
    };

    // Return
    return {
        user,
        signinUsingGoogle,
        error,
        logout,
        isLoading,
        registation,
        handleLogin,
    };
};

export default useFirebase;

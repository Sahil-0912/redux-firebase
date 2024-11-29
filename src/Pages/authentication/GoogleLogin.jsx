import React, { useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../Redux/FireBase";

const GoogleLogin = () => {
    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            }
            else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);


    // Handle Google Sign-In
    const handleLogin = async () => {
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Login failed:", error.message);
        }
    };

    // Handle Logout
    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Logout failed:", error.message);
        }
    };

    console.log("user.................")
    console.log(user)
    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            {user ? (
                <div>
                    <h2>Welcome, {user.displayName}!</h2>
                    <p>Email: {user.email}</p>
                    {user.photoURL ? (
                        <img
                            src={user.photoURL}
                            alt="Profile"
                            style={{ borderRadius: "50%", width: "100px", height: "100px" }}
                        />
                    ) : (
                        <div>Loading image...</div>
                    )}


                    <button onClick={handleLogout} style={{ marginTop: "10px" }}>
                        Logout
                    </button>
                </div>
            ) : (
                <button onClick={handleLogin}>Login with Google</button>
            )}
        </div>
    );
};

export default GoogleLogin;
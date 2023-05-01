import React, { useState } from "react";
import Add from "../img/upload.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
    const [err,setErr] = useState(false)
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

    try{
        const res = await createUserWithEmailAndPassword(auth, email, password)

            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(

            (error) => {
                setErr(true);
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
                await updateProfile(res.user, {
                    displayName,
                    photoURL: downloadURL,
                });
                await setDoc(doc(db, "users", res.user.uid), {
                    uid: res.user.uid,
                    displayName,
                    email,
                    photoURL: downloadURL,
                  });
                });
            }
            );



        }catch(err){
    setErr(true);
    }

    };

    return (
        <div className="formCon">
            <div className="formWrap">
                <span className="logo">chat.box</span>
                <span className="logo1">Sign Up</span>
                <span className="title">It's fast and effortless.</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="New password"/>
                    <input style={{display:"none"}} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add avatar</span>
                    </label>
                    <button className="button">Create Account</button>
                    {err && <span>Something went wrong.</span>}
                </form>
                <p>Already have an account? Login</p>
            </div>
        </div>
    )
}


export default Register;
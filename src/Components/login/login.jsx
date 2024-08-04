import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import { auth, db } from "../../lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import upload from "../../lib/upload";
// import { useUserStore } from "./lib/userStore";



const Login = () => {
    const[avatar, setAvatar] = useState({ // To set the profile pic for the first time,if the user wants to register.
        file: null, 
        url: ""
    })

    const handleAvatar = e => { // To select the image and pass it to the input label.
        if(e.target.files[0]){ // returns the file selected.
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0]) // create a url referencing the selected DOM element.
            })
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const {email, password} = Object.fromEntries(formData);
        try {
            await signInWithEmailAndPassword(auth, email, password);

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        
        const {username, email, password} = Object.fromEntries(formData);

        try {
            const res = await createUserWithEmailAndPassword(auth,email,password);

            const imgUrl = await upload(avatar.file)
            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                id: res.user.uid,
                avatar: imgUrl,
                blocked: [],
              });
            await setDoc(doc(db, "userchats", res.user.uid), {
                chats: [],
              });

              toast.success("Account created, ")
              
        } catch (err) {
            console.log(err);
            toast.error(err.message)
        }
    }
    
  return (
    <div className="Login">
        <div className="item">
            <h2>Welcome back..!</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <button>Sign In</button>
            </form>
        </div>
        <div className="separator"></div>
        <div className="item">
        <h2>Create an account</h2>
            <form onSubmit={handleRegister}>
                <label htmlFor="file">
                    <img src={avatar.url || "./avatar.png"} alt="" /> {/*If the user selects an image then avatar.url, if he didn't then show default avatar. */}
                    Upload an Image
                </label> 
                <input type="file"  id="file" style={{display: 'none'}} onClick={handleAvatar}  /> 
                <input type="text" placeholder="Username" name="username" />
                <input type="text" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <button>Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default Login;
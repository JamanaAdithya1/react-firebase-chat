import { useState } from "react";
import "./login.css"

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
    
  return (
    <div className="Login">
        <div className="item">
            <h2>Welcome back..!</h2>
            <form action="">
                <input type="text" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <button>Sign In</button>
            </form>
        </div>
        <div className="separator"></div>
        <div className="item">
        <h2>Create an account</h2>
            <form action="">
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
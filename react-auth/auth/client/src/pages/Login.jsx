import Google from "../assets/google.png"
import Facebook from "../assets/facebook.png"
import Git from "../assets/git.png"


function Login() {

    const google = ()=>{
        window.open('http://localhost:5000/auth/google', "_self")
    }


    return (
        <div className="login">
            <h1 className="loginTitle">Choose a Login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={google}>
                        <img src={Google} alt="icon" className="icon" />
                        Google
                    </div>
                    <div className="loginButton facebook">
                        <img src={Facebook} alt="icon" className="icon" />
                        Facebook
                    </div>
                    <div className="loginButton github">
                        <img src={Git} alt="icon" className="icon" />
                        Git-Hub
                    </div>
                </div>
                <div className="center">
                    <div className="line"/>
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Password" />
                    <button className="submit">Login</button>
                </div>
            </div>
        </div>
    )
}


export default Login
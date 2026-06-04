import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginPage() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const navigate = useNavigate();

    const handleLogin = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(loginData);
        navigate("/dashboard");
    };

    return (
        <>
            <h1>SiteForge</h1>
            <form onSubmit={handleLogin}>
                <label>Email:</label>
                <input 
                    type="email" 
                    placeholder="Email"
                    name="email" 
                    value={loginData.email} 
                    onChange={handleChange}/>
                <label>Password:</label>
                <input 
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}/>
                
                <button type="submit">Login</button>
            </form>
            <p>Need an account?</p>
            <Link to="/register">Create Account</Link>
        </>
    );
}

export default LoginPage;
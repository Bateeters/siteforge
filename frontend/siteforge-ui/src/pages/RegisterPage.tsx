import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
    const [registerData, setRegisterData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setRegisterData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRegister = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(registerData);
        navigate("/dashboard");
    };

    const navigate = useNavigate();

    return (
        <>
            <h1>Create SiteForge Account</h1>
            <form onSubmit={handleRegister}>
                <label>First Name:</label>
                <input 
                    type="text" 
                    placeholder="First Name"
                    name="firstName"
                    value={registerData.firstName}
                    onChange={handleChange} />
                <label>Last Name:</label>
                <input 
                    type="text" 
                    placeholder="Last Name" 
                    name="lastName"
                    value={registerData.lastName}
                    onChange={handleChange} />
                <label>Email:</label>
                <input 
                    type="email" 
                    placeholder="Email"
                    name="email"
                    value={registerData.email}
                    onChange={handleChange}/>
                <label>Password:</label>
                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={registerData.password}
                    onChange={handleChange} />
                <label>Confirm Password:</label>
                <input 
                    type="password" 
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={registerData.confirmPassword}
                    onChange={handleChange} />
                
                <button type="submit">Create Account</button>
            </form>
            <p>Already have an account?</p>
            <Link to="/login">Login</Link>
        </>
    );
}

export default RegisterPage;
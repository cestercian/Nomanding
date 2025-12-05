import React, {type JSX, useState} from "react";
import {useLocation} from "react-router-dom";
import {loginUser} from "../api/auth.ts";

type LoginFormData = {
    email: string;
    password: string;
};

export default function Login(): JSX.Element {
    const [loginFormData, setLoginFormData] = useState<LoginFormData>({
        email: "",
        password: "",
    });
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)

    const location = useLocation()

    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        setStatus("submitting")
        setError(null)
        loginUser(loginFormData)
            .then( data => {console.log(data)})
            .then(() => {setStatus("idle")})
            .catch( err => {
                setError(err.message)
                setStatus("idle")
            })
        console.log(loginFormData);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = e.target;
        setLoginFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const message :string = location.state?.message

    return (
        <div className="login-container">
            <h3>{message}</h3>
            <h1>Sign in to your account</h1>
            {error && <h3>{error}</h3>}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                    required
                />

                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                    required
                />
                <button type="submit" disabled={status === "submitting"} >Log in</button>
            </form>
        </div>
    );
}

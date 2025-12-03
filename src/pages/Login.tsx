import React, {type JSX, useState} from "react";
import {useLocation} from "react-router-dom";

type LoginFormData = {
    email: string;
    password: string;
};

export default function Login(): JSX.Element {
    const [loginFormData, setLoginFormData] = useState<LoginFormData>({
        email: "",
        password: "",
    });

    const location = useLocation()

    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
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
                <button type="submit">Log in</button>
            </form>
        </div>
    );
}

//Login & Sign up Page 

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { chakra } from "@chakra-ui/react"; //Still Don't know why this is still not activated. 
import "./Login.css";

//TO DO: Getting the background image. 
//Background image url: https://c1.wallpaperflare.com/path/601/359/815/green-tea-drink-leaf-chinese-368a46c01c702f24a32b5722c650e03c.jpg
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 8;//Max Password Limit
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    return (

        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label><h3>Email</h3></Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label><h3>Password</h3></Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />

                </Form.Group>

                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
                <href>Guest Login</href>
                <text>Not yet a Tea-Time Member?<strong>Then let's Sign up!</strong></text>
                <Button block size="lg" type="signup" disabled={!validateForm()}>
                    Sign up
                </Button>

            </Form>
            <div>
                <div style={{ backgroundImage: `url("https://c1.wallpaperflare.com/path/601/359/815/green-tea-drink-leaf-chinese-368a46c01c702f24a32b5722c650e03c.jpg")` }}></div>
            </div>
        </div>
    );
}

export default Login;
//Reference: https://www.simplilearn.com/tutorials/reactjs-tutorial/login-page-in-reactjs#what_is_reactjs
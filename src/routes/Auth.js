import React, { useState } from "react";
import { authService } from "../fbase";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(false);
    const [error, setError] = useState("");

    const onChange = (event) => {
        const {target : {name,value}} = event;
        if (name === "email"){
            setEmail(value);
        }
        else if (name === "password"){
            setPassword(value);
        }
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        try{
            let data;
            if(newAccount){ // create account (새로운 계정을 만드는 경우)
                data =  await authService.createUserWithEmailAndPassword(email, password);
            }
            else{ // log in (이미 게정이 있고, 로그인하는 경우라면)
                data =  await authService.signInWithEmailAndPassword(email, password);
            }
        }
        catch(error){
            setError(error.message);
        }
    }

    const toggleAccount=() => setNewAccount(prev => !prev);
    
    return (
        <div>
            <p>LoginPage</p>
            <form onSubmit={ onSubmit }>
                <input 
                    name="email" 
                    type="email"
                    placeholder="Write Email" 
                    required 
                    value={ email } 
                    onChange={ onChange }
                />
                <input 
                    name="password" 
                    type="password" 
                    placeholder="Write Password" 
                    required 
                    value={ password } 
                    onChange={ onChange } 
                />
                <input 
                    name="submit" 
                    type="submit"
                    value={ newAccount ? "CreateAccount" : "Sign In" }
                    onSubmit={ onSubmit }
                />
                <p>{ error }</p>
            </form>
            <span onClick={toggleAccount}>
                {newAccount ? "Sign in" : "Create Account"}
            </span>
        </div>
    )
}
export default Auth;

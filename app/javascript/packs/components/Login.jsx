import React, { useState } from "react";

export default function Login(){

    const[email, setEmail] = useState();
    const[password, setPassword] = useState();
    
    
    let token = document.querySelector('meta[name="csrf-token"]')['content'];

    
    async function goFuck(){
        console.log(token)
        await fetch('http://localhost:3000/users/sign_in', {
            method: 'post',
            headers: {
                
                'Content-Type': 'application/json',
       
              },
            body: JSON.stringify({
                authenticity_token: token,
                user: {
                email: email,
                password: password}
                
            })
        }).then(response => {
            console.log
        })
    }

    function emailHandler(e){
        setEmail(e.target.value)
    }

    function passwordHandler(e){
        setPassword(e.target.value)
    }
    
    function submitHandler(e) {
        e.preventDefault()
        goFuck();
    }

    

    return(
        <div>
            <form onSubmit={submitHandler}>
            <input type="email" placeholder="email" onChange={emailHandler} volume={email} name="user[email]"></input>
            <input type="password" onChange={passwordHandler} volume={password} name="user[password]"></input>
            <input type="submit" value="Submit"></input>
            </form>

            
        </div>
    )
}
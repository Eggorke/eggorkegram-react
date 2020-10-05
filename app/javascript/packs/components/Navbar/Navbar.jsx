import React, { useState, useEffect } from "react";

export default function Navbar(){

    const[user, setUser] = useState();
    const[volume, setVolume] = useState();
    const[status, setStatus] = useState(false);
    const url = 'http://localhost:3000/current_user'

    
    async function getCurrentUser(){
        let response = await fetch(url)
        if (response.ok && !status){
            let json = await response.json();
            setUser(json)
            setStatus(true);
        } else {
            alert("Govno response")
        }
    }

    

    
    async function Logout(){
        
        await fetch('http://localhost:3000/sign_out'
        
        )
    }

    async function submitHandler(e){
        e.preventDefault()
        Logout()
    }

    //if (!status && !volume){
    //    getCurrentUser()
    //} else {
        
    //        setUser(volume)
        
    //}

    

    
    
    

    if (user){
        return(
            <div>
                {user.name}
            </div>
        )
    } else {
        return(
            <div>
                No user
                <form onSubmit={submitHandler}>
                    <input type="submit" value="Logout"/>
                </form>
                <form>
                    <input type="button" onClick={getCurrentUser} value="click it"/>
                </form>

            </div>
    )}
}
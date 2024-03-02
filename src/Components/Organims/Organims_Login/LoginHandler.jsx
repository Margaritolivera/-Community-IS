import React from "react";
import LoginForm from "../../Molecules/Molecules_Login/LoginForm";

function LoginHandler({ username, password }) {
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      // llamada a API para login   
    }
  
    return(
        <>
      
        <LoginForm onSubmit={handleSubmit} />;
      
       
        </>
    )
    
  }

  export default LoginHandler;
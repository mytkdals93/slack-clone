import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login() {
    const signIn = (e)=>{
        e.preventDefault();
        auth.signInWithPopup(provider).catch(error=>{
            alert(error.message);
        });
    }
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
          alt=""
        />
        <h1>
            Sign in to the Slack-Clone
        </h1>
        <Button onClick={signIn} color="primary" variant="outlined">
            Sign in with Google
        </Button>

      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  min-height: 100vh;
  width:100%;
  background-color:#fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginInnerContainer = styled.div`
    position: relative;
  min-width:500px;
  height:300px;
  padding: 100px 0;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  display:flex;
  flex-direction: column;
  justify-content:space-around;
  align-items:center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  > img {
    object-fit: cover;
    height: 110px;
    padding-bottom:20px;
  }
  > h1{
      font-size:1.7em;
      font-weight:bold;
  }
  > button{
  
  }
`;

import React, { useRef } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
function ChatInput({ channelId, channelName }) {
  const [loggedInUser] = useAuthState(auth);
    const inputRef = useRef(null);
 
  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId){
        return false;
    }
    db.collection('rooms').doc(channelId).collection('messages').add({
        message:inputRef.current.value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user:{
            username:loggedInUser?.displayName,
            image:loggedInUser?.photoURL,
            uid:loggedInUser.uid
        }
    });
    inputRef.current.value=""

  };
  return (
    <ChatInputContainer>
      <form onSubmit={sendMessage}>
        <input ref={inputRef} type="text" placeholder={`Message #${channelName}`} />
        <button hidden type="submit">
          SEND
        </button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius:20px;
    > form {
        position:relative;
        display:flex;
        justify-content:center;
        > input{
        position:fixed;
        bottom:30px;
        width:60%;
        border:1px solid gray;
        border-radius:3px;
        padding:20px;
        outline:none;
        }
        > button{
            display:none !important;
        }
    }
`;

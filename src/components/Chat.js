import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import StarBorderSharpIcon from "@material-ui/icons/StarBorderSharp";
import InfoSharpIcon from "@material-ui/icons/InfoSharp";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import ChatInput from "./ChatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";
function Chat() {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );
  const [roomMessages,loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );
  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId,loading,roomMessages]);
  return (
    <ChatContainer>
    {roomDetails && roomMessages && (
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>#{roomDetails?.data().name}</strong>
            </h4>
            <StarBorderSharpIcon />
          </HeaderLeft>
          <HeaderRight>
            {/* <p>
              <InfoSharpIcon /> Details
            </p> */}
          </HeaderRight>
        </Header>
        <ChatMessages>
        {/* List out the messages */}
        {
          roomMessages?.docs.map(doc=>{
            const {message,timestamp,user}  = doc.data();
            return (
              <Message 
                key= {doc.id}
                message= {message}
                timestamp = {timestamp}
                user = {user}
              />
            )
          })
        }
        <ChatBottom ref={chatRef}/>
        </ChatMessages>
        <ChatInput
          chatRef={chatRef}
          channelId={roomId}
          channelName = {roomDetails?.data().name}
        />
      </>
    )}
    </ChatContainer>
  );
}

export default Chat;
const ChatBottom = styled.div`
  padding-bottom:100px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
  font-weight: 600;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
    align-items: center;
    margin-right: 10px;
    > .MuiSvgIcon-root {
      margin-left: 0.8rem;
      font-size: 1rem;
    }
  }
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  > p {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    > .MuiSvgIcon-root {
      position: relative;
      top: 2px;
      margin-right: 5px;
      font-size: 1.3rem;
    }
  }
`;

const ChatContainer = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const ChatMessages = styled.div``;

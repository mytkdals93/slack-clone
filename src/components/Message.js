import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";

function Message({ message, user, timestamp }) {
  const [loggedInUser] = useAuthState(auth);
  return (
    <MessageContainer>
      <img src={user.image} alt="" srcset="" />
      <MessageInfo>
        <h4>
          {loggedInUser.uid === user.uid ? (
            <strong>
              {user.username}
              <span>me</span>
            </strong>
          ) : (
              <>
              {user.username}
              {" "}
              </>
          )}

          <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 30px;
  > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
const MessageInfo = styled.div`
  padding-left: 10px;

  > h4 {
    font-weight: 600;
    > strong {
      font-weight: bold;
      opacity: 1;
      >span{
          font-size:0.3em;
          color:red;
      }
    }
  }
  > h4 > span {
    color: gray;
    font-weight: 600;
    margin-left: 4px;
    font-size: 10px;
  }
  > p {
    padding: 5px;
  }
`;

import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { enterRoom } from "../features/appSlice";
import { db } from "../firebase";
import firebase from "firebase";
export const SidebarOption = ({ Icon, title,addChannelOption,id }) => {
  const dispatch = useDispatch();
    const addChannel = ()=>{
        const channelName = prompt("채널명을 입력해주세요.");
        if(channelName){
            db.collection("rooms").add({
                name:channelName,
                timestamp:firebase.firestore.FieldValue.serverTimestamp()
            })
        }
    };
    const selectChannel = ()=>{
      if (id) {
         dispatch(enterRoom({
           roomId:id
         }))
      }
    };

  return (
    <SidebarOptionContainer
    onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannnel>
          <span>#</span> {title}
        </SidebarOptionChannnel>
      )}
    </SidebarOptionContainer>
  );
};

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9em;
  padding-left: 2px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > h3 {
    font-size: 0.9em;
    font-weight:500;
    > span{
        padding: 15px;
    }
  }

  
`;
const SidebarOptionChannnel = styled.h3`
  padding:10px 0;
`;

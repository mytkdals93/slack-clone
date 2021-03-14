import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import styled from "styled-components";
import { Avatar } from '@material-ui/core';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
function Header() {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <HeaderContainer>
            {/* Header Left */}
            <HeaderLeft>
                <HeaderAvatar
                //TODO: Add onclick
                 src={user?.photoURL}
                alt={user?.displayName}
                 />
                 {/* <AccessTimeIcon/> */}
            </HeaderLeft>
            {/* Header Search */}
            {/* <HeaderSerach>
                <SearchIcon />
                <input placeholder="Search..."/>
            </HeaderSerach> */}
            {/* Header Right */}
            <HeaderRight>
             <ExitToAppIcon onClick={()=>{
                 auth.signOut();
             }}/>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.header`
    position:fixed;
    width:100%;
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    background-color: var(--slack-color);
    color:white;
    padding: 10px 0;
`;
const HeaderLeft = styled.div`
    flex:0.3;
    display:flex;
    align-items:center;
    margin-left: 20px;
    > .MuiSvgIcon-root {
        margin-left:auto;
        margin-right:30px;
    }
`;
const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity:0.8;
        transition: .6s;
        transform: scale(1.1);
    }
`;
const HeaderSerach = styled.div`
    flex:0.4;
    display: flex;
    justify-content:center;
    align-items: center;
    border-radius:6px;
    text-align:center;
    background-color: #421f44;
    padding: 3px 50px;
    > input{
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: none;
        color:white;
        ::placeholder{
            color: white;
            opacity:.7;
        }
    }

`

const HeaderRight = styled.div`
    flex:0.3;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    > .MuiSvgIcon-root {
        cursor: pointer;
        margin-right: 20px;
    }
`;